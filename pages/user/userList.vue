<template>
	<view class="content-opp backcolor">
		<view v-for="i in userlList" :key="i.Id">
			<button type="default" class="b-border" @click="selectUser(i['Id'])">{{i.UserName}}&nbsp;&nbsp;{{i.RealName}}</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userlList: [],
			}
		},
		onLoad: function() {
			uni.request({
				url: 'http://'+getApp().globalData.urlStr+'/GetUsersByGroupId',
				method: 'GET',
				data: {
					groupId: getApp().globalData.groupId,
				},
				success: res => {
					if (res.data.code == 0) {
						this.userlList = res.data.data;
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			selectUser(e) {
				getApp().globalData.uId = e
				uni.navigateTo({
					url: "../user/userDetail"
				})
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
		margin-top: 20upx;
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
