<template>
	<view class="content">
		<view class="title">AUM月日均净增目标</view>
		<input class="i-border" type="text" value="" v-model="targetOne" />
		<view class="title">全口径剪刀差目标</view>
		<input class="i-border" type="text" value="" v-model="targetTwo" />
		<view class="title">一般性剪刀差目标</view>
		<input class="i-border" type="text" value="" v-model="targetThree" />
		<view class="title">中收目标</view>
		<input class="i-border" type="text" value="" v-model="targetFour" />
		<view class="btn-row">
			<button class="b-border" type="warn" @tap="createTarget">提交</button>
			<button type="default" @tap="cancelTarget">取消</button>
		</view>
	</view>
</template>

<script>
	import mInput from '../../components/m-input.vue'

	export default {
		components: {
			mInput
		},
		data() {
			return {
				targetOne: '',
				targetTwo: '',
				targetThree: '',
				targetFour: '',
				positionTop: 0,
			}
		},
		methods: {
			initPosition() {
				/**
				 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				 * 反向使用 top 进行定位，可以避免此问题。
				 */
				this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
			},
			cancelTarget(){
				uni.reLaunch({
					url:"../main/main",
				})
			},
			createTarget() {
				uni.request({
					url: 'http://localhost/TargetScore',
					method: 'GET',
					data: {
						eventOne: this.targetOne,
						eventTwo: this.targetTwo,
						eventThree: this.targetThree,
						eventFour: this.targetFour,
					},
					success: res => {
						if (res.data.code == 0) {
							uni.showModal({
								content: "提交成功！",
								showCancel: false,
								success: function(res) {
									if (res.confirm) {
										uni.switchTab({
											url: "../main/main",
										})
									}
								}
							})
						}
					},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		onReady() {
			this.initPosition();
		}
	}
</script>

<style>
	.i-border {
		border: #8F8F94 1upx solid;
		background-color: #EFEFF4;
		margin-top: 10upx;
	}
	.b-border{
		margin-bottom: 10upx;
	}
</style>
