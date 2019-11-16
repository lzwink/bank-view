<template>
	<view class="content">
		<view class="input-group">
			<!-- <view class="input-row border">
				<text class="title">账号：</text>
				<m-input class="m-input" type="text" clearable v-model="search_user_name"></m-input>
			</view> -->
			<view class="input-row">
				<text class="title">机构名或姓名：</text>
				<m-input class="m-input" type="text" clearable v-model="search_real_name"></m-input>
			</view>
		</view>
		<view class="btn-row">
			<button type="warn" @tap="search">搜索</button>
		</view>		
	</view>
</template>

<script>
	import mInput from '../../components/m-input.vue'
	export default{
		data(){
			return {
				search_user_name:'',
				search_real_name:'',
			}
		},
		components: {
			mInput
		},
		methods:{
			initPosition() {
				/**
				 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				 * 反向使用 top 进行定位，可以避免此问题。
				 */
				this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
			},
			search(){
				getApp().globalData.searchUserName = this.search_user_name;
				getApp().globalData.searchRealName = this.search_real_name;
				uni.navigateTo({
					url:"../user/searchRes"
				})
			}
		},
		onReady() {
			this.initPosition();
		}
	}
</script>

<style>
	.title{
		width: 40%;
	}
</style>
