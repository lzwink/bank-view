<template>
	<view class="content">
		<view v-if="userName" class="btn-row">
			<view v-if="userName!='211'">
				<button v-if="isSign==1" type="default" class="b-border">已签到</button>
				<button v-if="isSign==2" type="warn" class="b-border" @tap="createSign">待签到</button>
				<button v-if="isDraw==1" type="default" class="b-border">已抽奖</button>
				<button v-if="(isDraw==2)&&(dayNum>=5)" type="warn" class="b-border" @tap="createDraw">待抽奖</button>
				<button v-if="dayNum<5" type="warn" class="b-border" @tap="createDraw" disabled="false">待抽奖</button>
			</view>			
			<button type="warn" class="b-border" @tap="updatePwd">修改密码</button>
			<button type="default" class="b-border" @tap="bindLogout">退出登录</button>
		</view>
		<view v-if="!userName" class="btn-row">
			<button type="warn" class="b-border" @tap="bindLogin">登录</button>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		data() {
			return {
				userName: "",
				isSign: 0,
				isDraw: 0,
				dayNum: 0,
			}
		},
		onLoad: function(e) {
			uni.request({
				url: 'http://localhost:8080/Check',
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
			var dt=new Date();
			this.dayNum=dt.getDay();
		},
		methods: {
			createDraw() {
				uni.request({
					url: 'http://localhost:8080/CreateDraw',
					method: 'GET',
					data: {},
					success: res => {
						if (res.data.code == 102) {
							uni.showModal({
								content: '抱歉，暂未达到抽奖条件！',
								showCancel: false,
								success: res => {
									if (res.confirm) {
										uni.reLaunch({
											url: "../user/user",
										})
									}
								}
							});
							// this.$router.go(0);
						};
						if (res.data.code == 0) {
							uni.showModal({
								content: res.data.data,
								showCancel: false,
								success: res => {
									if (res.confirm) {
										uni.reLaunch({
											url: "../user/user",
										})
									}
								}
							});
							// this.$router.go(0);
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			updatePwd() {
				uni.navigateTo({
					url: '../user/pwd',
				});
			},
			createSign() {
				uni.request({
					url: 'http://localhost:8080/CreateSign',
					method: 'GET',
					data: {},
					success: res => {
						if (res.data.code == 0) {
							uni.showModal({
								content: "签到成功",
								showCancel: false,
								duration: 2000,
							});
							this.$router.go(0);
							// uni.showToast({
							// 	duration: 2000
							// });
							// this.$router.go(0);
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
			getUserInfo() {
				uni.request({
					url: 'http://localhost:8080/GetLoginUser',
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
			bindLogin() {
				uni.navigateTo({
					url: '../login/login',
				});
			},
			bindLogout() {
				uni.request({
					url: 'http://localhost:8080/Logout',
					method: 'GET',
					data: {},
					success: res => {
						if (res.data.code == 0) {
							this.userName = res.data.data;
						}
					},
					fail: () => {},
					complete: () => {}
				});

				if (!this.userName) {
					uni.reLaunch({
						url: '../login/login',
					});
				}
			}
		}
	}
</script>

<style>
	.b-border {
		margin-bottom: 20upx;
	}
</style>
