<template>
	<view class="content" style="background-color: #f12e32;">
		<view class="hello">
			<image src="../../static/img/cj_top.jpg" style="width: 750upx;height: 462upx;"></image>
			<image v-if="isSign==2" src="../../static/img/cj_btn.jpg" style="width: 750upx;height: 77upx;" @tap="createSign"></image>
			<image v-if="isSign==1" src="../../static/img/cj_btn_2.jpg" style="width: 750upx;height: 77upx;"></image>
			<image v-if="isDraw==2" src="../../static/img/cj_wait.jpg" style="width: 750upx;height: 759upx;" @tap="createDraw"></image>
			<image v-if="isDraw==1" src="../../static/img/cj_down.jpg" style="width: 750upx;height: 759upx;"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userName: "",
				isSign: 0,
				isDraw: 0,
				dayNum: 0,
			}
		},
		onLoad: function() {
			uni.request({
				url: 'http://'+getApp().globalData.urlStr+'/Check',
				method: 'GET',
				data: {},
				success: res => {
					if (res.data.code == 0) {
						this.userName = res.data.data;
					} else {
						uni.redirectTo({
							url: '../login/login',
						});
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},
		mounted: function() {
			this.getUserInfo();
		},
		methods: {
			getUserInfo() {
				uni.request({
					url: 'http://'+getApp().globalData.urlStr+'/GetLoginUser',
					method: 'GET',
					data: {},
					success: res => {
						if (res.data.code == 0) {
							this.isDraw = res.data.data.IsDraw;
							this.isSign = res.data.data.IsSign;
						} else {
							uni.navigateTo({
								url: '../login/login',
							});
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			createSign() {
				uni.request({
					url: 'http://'+getApp().globalData.urlStr+'/CreateSign',
					method: 'GET',
					data: {},
					success: res => {
						var _this = this;
						if (res.data.code == 0) {
							uni.showModal({
								content: "签到成功",
								showCancel: false,
								success:ress=>{
									if (ress.confirm){
										_this.$router.go(0);
									}
								}
							});
						} else {
							uni.showModal({
								content: '签到失败，请重试！',
								showCancel: false,
								success: function() {
									uni.switchTab({
										url: "../main/main",
									})
								}
							});
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			createDraw() {
				uni.request({
					url: 'http://'+getApp().globalData.urlStr+'/CreateDraw',
					method: 'GET',
					data: {},
					success: res => {
						if (res.data.code == 102) {
							uni.showModal({
								content: '抱歉，暂未达到抽奖条件！',
								showCancel: false,
								success: res => {
									var _this = this;
									if (res.confirm) {
										_this.$router.go(0);
									}
								}
							});
						};
						if (res.data.code == 0) {
							uni.showModal({
								title:'恭喜您获得',
								content: res.data.data,
								showCancel: false,
								success: res => {
									var _this = this;
									if (res.confirm) {
										_this.$router.go(0);
									}
								}
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
	.content {
		padding-top: 0upx;
		padding-left: 0upx;
		padding-right: 0upx;
		padding-bottom: 0upx;
	}

	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
	}
</style>
