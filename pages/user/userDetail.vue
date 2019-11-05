<template>
	<view class="content">
		<view class="hello">
			<view class="title">
				用户名：{{user.RealName}}
			</view>
			<view class="title">
				编号：{{user.UserName}}
			</view>
			<view class="title">
				目前得分：{{uScore.Score}}
			</view>
			<view class="title-o">
				对手名：{{opp.RealName}}
			</view>
			<view class="title-o">
				编号：{{opp.UserName}}
			</view>			
			<view class="title-o">
				对手得分：{{oScore.Score}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: [],
				opp: [],
				oScore: [],
				uScore: [],
			}
		},
		onLoad: function() {
			uni.request({
				url: 'http://localhost:8080/GetAllInfoById',
				method: 'GET',
				data: {
					id: getApp().globalData.uId,
				},
				success: res => {
					this.user = res.data.data.user;
					this.opp = res.data.data.opp;
					this.uScore = res.data.data.uScore;
					this.oScore = res.data.data.oScore;
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {

		}
	}
</script>

<style>
	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.title {
		/* color: #8f8f94; */
		color: #000000;
		font-weight: bold;
		margin-top: 50upx;
	}
	.title-o{
		color: #555555;
		font-weight: bold;
		margin-top: 50upx;
	}
</style>
