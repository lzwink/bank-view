<template>
	<view class="content-opp backcolor">
		<view v-for="(i,index) in groupList">
			<view v-if="i['Id']==1">
				<button type="warn" class="b-border" disabled="false">{{i.Name}}</button>
			</view>
			<view v-if="i['Pid']==1">
				<button type="default" class="b-border" @click="selectGroup(i['Id'])">{{i.Name}}</button>
			</view>
		</view>
		<view v-for="(i,index) in groupList">
			<view v-if="i['Id']==2">
				<button type="warn" class="b-border" disabled="false">{{i.Name}}</button>
			</view>
			<view v-if="i['Pid']==2">
				<button type="default" class="b-border" @click="selectGroup(i['Id'])">{{i.Name}}</button>
			</view>
		</view>
		<view v-for="(i,index) in groupList">
			<view v-if="i['Id']==3">
				<button type="warn" class="b-border" disabled="false">{{i.Name}}</button>
			</view>
			<view v-if="i['Pid']==3">
				<button type="default" class="b-border" @click="selectGroup(i['Id'])">{{i.Name}}</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				groupList: [],
			}
		},
		onLoad: function() {
			uni.request({
				url: 'http://localhost/GetAllUsersGroup',
				method: 'GET',
				data: {},
				success: res => {
					if (res.data.code == 0) {
						this.groupList = res.data.data;
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			selectGroup(e) {
				getApp().globalData.groupId = e
				uni.navigateTo({
					url: "../user/userList"
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
