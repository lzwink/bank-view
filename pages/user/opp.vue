<template>
	<view class="content-opp backcolor">
		<view class="container">
			<button type="primary" size="mini" @tap="cancelOpp">返回主页</button>
			<button type="warn" size="mini">可选择</button>
			<button type="default" size="mini">已绑定</button>			
		</view>
		<view v-for="i in oppList" :key="i.Id">
			<button v-if="i['OpponentId']!=0" type="default" hover-class="none" class="b-border">{{i.UserName}}&nbsp;&nbsp;{{i.RealName}}</button>
			<button v-if="i['OpponentId']==0" type="warn" class="b-border" @click="selectOpp(i['Id'])">{{i.UserName}}&nbsp;&nbsp;{{i.RealName}}</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oppList: [],
			}
		},
		onLoad: function() {
			uni.request({
				url: 'http://'+getApp().globalData.urlStr+'/OpponentList',
				method: 'GET',
				data: {},
				success: res => {
					if (res.data.code == 0) {
						this.oppList = res.data.data;
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			cancelOpp(){
				uni.reLaunch({
					url:"../main/main"
				})
			},
			selectOpp(e) {
				uni.showModal({
					content: '确定选择该对手吗！',
					showCancel: true,
					success: function(res) {
						if (res.confirm) {
							uni.request({
								url: 'http://'+getApp().globalData.urlStr+'/ChooseOpponent',
								method: 'GET',
								data: {
									oppId: e,
								},
								success: res => {
									if (res.data.code == 0) {
										uni.showModal({
											content: "绑定成功！",
											showCancel: false,
											success: function(res) {
												if (res.confirm) {
													uni.switchTab({
														url: '../main/main',
													});
												}
											}
										})
									}
								},
								fail: () => {},
								complete: () => {}
							});
						}
					}
				});
			}
		}
	}
</script>

<style>
	.content-opp {
		/* 定义flex容器 */
		display: flex;
		/*设置容器内部容器的排列方向*/
		flex-direction: column;
		flex: 1;
	}

	.ul {
		font-size: 30upx;
		color: #8f8f94;
		margin-top: 50upx;
	}

	.ul>view {
		line-height: 50upx;
		padding-left: 10upx;
	}

	.b-border {
		margin-bottom: 20upx;
		margin-left: 20upx;
		margin-right: 20upx;
	}

	.backcolor {
		background-color: #efeff4;
	}

	.container {
		/* 定义flex容器 */
		display: flex;
		/*设置容器内部容器的排列方向*/
		flex-direction: row;
		margin-top: 20upx;
		margin-bottom: 20upx;
	}
</style>
