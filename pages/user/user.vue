<template>
	<view class="content">
		<view v-if="userName" class="btn-row">
			<button v-if="isSign==1" type="default" class="b-border">已签到</button>
			<button v-if="isSign==2" type="primary" class="primary b-border" @tap="createSign">签到</button>
			<button type="default" class="b-border" @tap="bindLogout">退出登录</button>
		</view>
		<view v-if="!userName" class="btn-row">
			<button type="primary" class="primary b-border" @tap="bindLogin">登录</button>
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
				isDraw: 0
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
						uni.navigateTo({
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
		watch: {

		},
		methods: {
			createSign() {
				uni.request({
					url: 'http://localhost:8080/CreateSign',
					method: 'GET',
					data: {},
					success: res => {
						if (res.data.code == 0) {
							uni.showToast({
								duration: 2000
							});
							this.$router.go(0);
						} else {
							uni.showModal({
								content: '签到失败，请重试！',
								showCancel: false
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
