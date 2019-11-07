<template>
	<view class="content padding-main">
		<view class="hello">
			<view v-if="userName" class="title">
				工号：{{userName}}
			</view>
			<view v-if="userName" class="title">
				姓名：{{realName}}
			</view>
			<view v-if="!userName" class="title">
				暂未登录，请点击右下角“我的”登录！
			</view>
			<view v-if="userName">
				<view v-if="userGroup == 1">
					<button class="b-border" type="warn" @tap="upfile">上传文件</button>
				</view>
				<view v-if="(userGroup == 2)||(userGroup == 3)">
					<view v-if="!oppId" class="ul">
						<view>请选择您的对手！</view>
						<button class="b-border" type="warn" @tap="createUserOpp">选择对手</button>
					</view>
					<view v-if="oppId" class="ul">
						<view>您的对手是【 {{oppUserName}} {{oppRealName}} 】</view>
					</view>
					<view v-if="isCreatedTarget==0" class="ul">
						<view>请创建目标值！</view>
						<button class="b-border" type="warn" @tap="createUserTarge">创建目标值</button>
					</view>
					<view v-if="isCreatedTarget==1" class="ul">
						<view class="qiun-columns">
							<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
								<view class="qiun-title-dot-light">战况对比</view>
							</view>
							<view class="qiun-charts">
								<canvas canvas-id="canvasColumn" id="canvasColumn" class="charts"></canvas>
							</view>
						</view>
					</view>					
				</view>
				<button class="b-border" type="warn" style="width:30%;" @tap="searchAll" size="mini">全员搜索</button>
				<button class="b-border" type="warn" style="width:40%;" @tap="getAllUserGroup" size="mini">分组查看</button>
				<button class="b-border" style="float: right;width:30%;" type="warn" @tap="getTop" size="mini">TOP10</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import uCharts from '@/js_sdk/u-charts/u-charts/u-charts.js';

	var canvaColumn = null;

	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				chartData: {
					categories: ["AUM", "全口径", "一般性", "中收", "综合"],
					series: [{
						name: "我方",
						color: "#e8313e",
						data: [0, 0, 0, 0, 0]
					}, {
						name: "对方",
						color: "#ffcc00",
						data: [0, 0, 0, 0, 0]
					}]
				},
				userId: 0,
				realName: "",
				userName: "",
				oppId: 0,
				uOneScore: 0,
				uTwoScore: 0,
				uThreeScore: 0,
				uFourScore: 0,
				uSumScore: 0,
				oOneScore: 0,
				oTwoScore: 0,
				oThreeScore: 0,
				oFourScore: 0,
				oSumScore: 0,
				oppUserName: "",
				oppRealName: "",
				isCreatedTarget: 0,
				userGroup: 0,
				allUsersGroup: [],
			}
		},
		onLoad: function(e) {
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			uni.request({
				url: 'http://localhost/Check',
				method: 'GET',
				data: {},
				success: res => {
					if (res.data.code == 0) {
						this.userId = res.data.data;
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},
		mounted: function() {
			this.getUserInfo();
			this.getOppInfo();
			this.getOppScore();
			this.getUserScore();
			this.showColumn();
		},
		methods: {
			getTop(){
				uni.navigateTo({
					url:"../user/top",
				})
			},
			searchAll(){
				uni.navigateTo({
					url:"../user/search",
				})
			},
			getAllUserGroup() {
				uni.navigateTo({
					url: "../user/userGroupList",
				})
			},
			upfile() {
				self.location.href = "http://localhost/UpForm";
			},
			showColumn(canvasId, chartData) {
				canvaColumn = new uCharts({
					$this: this,
					canvasId: "canvasColumn",
					type: 'column',
					legend: {
						show: true
					},
					fontSize: 11,
					background: '#FFFFFF',
					pixelRatio: 1,
					animation: true,
					categories: this.chartData.categories,
					series: this.chartData.series,
					xAxis: {
						disabled: false,
						disableGrid: true,
						axisLine: false,
					},
					yAxis: {
						disableGrid: true,
						disabled: true,
						max: 200,
					},
					dataLabel: true,
					width: this.cWidth,
					height: this.cHeight,
					extra: {
						column: {
							type: 'group',
							width: 20
						}
					},
				});
			},
			createUserTarge() {
				uni.reLaunch({
					url: '../user/target',
				});
			},
			createUserOpp() {
				uni.reLaunch({
					url: '../user/opp',
				});
			},
			getOppScore() {
				uni.request({
					url: 'http://localhost/GetOppScore',
					method: 'GET',
					data: {},
					success: res => {
						if (res.data.code == 0) {
							this.chartData.series[1].data[0] = (res.data.data.EventOneReal / res.data.data.EventOneTarget * 100).toFixed(
								2);
							this.chartData.series[1].data[1] = (res.data.data.EventTwoReal / res.data.data.EventTwoTarget * 100).toFixed(
								2);
							this.chartData.series[1].data[2] = (res.data.data.EventThreeReal / res.data.data.EventThreeTarget * 100).toFixed(
								2);
							// this.chartData.series[1].data[3] = (res.data.data.EventFourReal / res.data.data.EventFourTarget * 100).toFixed(
							// 	2);
							this.chartData.series[1].data[3] = 100;
							this.chartData.series[1].data[4] = res.data.data.Score * 100;
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			getOppInfo() {
				uni.request({
					url: 'http://localhost/GetOppInfo',
					method: 'GET',
					data: {},
					success: res => {
						if (res.data.code == 0) {
							this.oppUserName = res.data.data.UserName;
							this.oppRealName = res.data.data.RealName;
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			getUserScore() {
				uni.request({
					url: 'http://localhost/GetUserScore',
					method: 'GET',
					data: {},
					success: res => {
						if (res.data.code == 0) {
							this.chartData.series[0].data[0] = (res.data.data.EventOneReal / res.data.data.EventOneTarget * 100).toFixed(
								2);
							this.chartData.series[0].data[1] = (res.data.data.EventTwoReal / res.data.data.EventTwoTarget * 100).toFixed(
								2);
							this.chartData.series[0].data[2] = (res.data.data.EventThreeReal / res.data.data.EventThreeTarget * 100).toFixed(
								2);
							this.chartData.series[0].data[3] = (res.data.data.EventFourReal / res.data.data.EventFourTarget * 100).toFixed(
								2);
							this.chartData.series[0].data[4] = res.data.data.Score;
							this.isCreatedTarget = 1;
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			getUserInfo() {
				uni.request({
					url: 'http://localhost/GetLoginUser',
					method: 'GET',
					data: {},
					success: res => {
						if (res.data.code == 0) {
							this.userName = res.data.data.UserName;
							this.oppId = res.data.data.OpponentId;
							this.realName = res.data.data.RealName;
							this.userGroup = res.data.data.AuthGroupId;
						} else {
							uni.navigateTo({
								url: '../login/login',
							});
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.padding-main {
		padding-left: 0upx;
		padding-right: 0upx;
	}

	.title {
		/* color: #8f8f94; */
		color: #000000;
		font-weight: bold;
		margin-top: 50upx;
		padding-left: 10upx;
	}

	.ul {
		font-size: 30upx;
		color: #8f8f94;
		margin-top: 50upx;
	}

	.ul>view {
		line-height: 50upx;
	}

	.b-border {
		margin-top: 20upx;
	}

	page {
		background: #F2F2F2;
		width: 750upx;
		overflow-x: hidden;
	}

	.qiun-padding {
		padding: 2%;
		width: 96%;
	}

	.qiun-wrap {
		display: flex;
		flex-wrap: wrap;
	}

	.qiun-rows {
		display: flex;
		flex-direction: row !important;
	}

	.qiun-columns {
		display: flex;
		flex-direction: column !important;
	}

	.qiun-common-mt {
		margin-top: 10upx;
	}

	.qiun-bg-white {
		background: #FFFFFF;
	}

	.qiun-title-bar {
		width: 96%;
		padding: 10upx 2%;
		flex-wrap: nowrap;
	}

	.qiun-title-dot-light {
		border-left: 10upx solid #e8313e;
		padding-left: 10upx;
		font-size: 32upx;
		color: #000000
	}

	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}
</style>
