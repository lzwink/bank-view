<template>
	<view class="content">
		<view class="title">原始密码</view>
		<input class="i-border" type="text" value="" v-model="oldPwd" />
		<view class="title">新密码</view>
		<input class="i-border" type="text" value="" v-model="newPwd" />
		<view class="btn-row">
			<button type="warn" @tap="createTarget">提交</button>
		</view>
	</view>
</template>

<script>
	import mInput from '../../components/m-input.vue'
	export default{
		data() {
			return {
				oldPwd:'',
				newPwd:'',
			}
		},
		methods:{
			initPosition() {
				/**
				 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				 * 反向使用 top 进行定位，可以避免此问题。
				 */
				this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
			},
			createTarget(){
				uni.request({
					url: 'http://'+getApp().globalData.urlStr+'/UpdateUserPwd',
					method: 'GET',
					data: {
						oldPwd:this.oldPwd,
						newPwd:this.newPwd,
					},
					success: res => {
						if (res.data.code == 0){
							uni.showModal({
								content: '修改成功！',
								showCancel: false,
								success: res => {
									if (res.confirm){
										uni.switchTab({
											url: '../main/main',
										});
									}
								},
								fail: () => {},
								complete: () => {}
							});
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			onReady() {
				this.initPosition();
			}
		}
	}
</script>

<style>
	.i-border {
		border: #8F8F94 1upx solid;
		background-color: #EFEFF4;
		margin-top: 10upx;
	}
</style>
