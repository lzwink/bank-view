<template>
	<view>
		<view class="content">
			<image src="../../static/img/fz_top.jpg" style="width: 750upx;height: 574upx;"></image>
			<image src="../../static/img/fz_jg.jpg" style="width: 750upx;height: 131upx;"></image>
			<view class="content" v-for="i in jgList" :key="i[0].userName">
				<view class="content-list">
					<view style="background-color: #f12e32;height: 80upx;width: 33upx;"></view>
					<view style="height: 80upx;width:50upx;background: #FFFFFF;">
						<image v-if="i[0].score>i[1].score" src="../../static/img/win.png" style="float:right;width:40upx;height: 53upx;padding-top: 10upx;"></image>
					</view>
					<view style="height: 70upx;width:300upx;text-align: left;padding-top: 10upx;padding-left: 20upx;">
						<span style="font-size: 25upx;color: #ff0047;font-weight: bold;">{{i[0].realName}}</span>
					</view>
					<view style="height: 70upx;width: 250upx;text-align: right;padding-top: 10upx;">
						<span style="font-size: 25upx;color: #ff0047;font-weight: bold;">{{(i[0].score*100).toFixed(2)}}</span>
					</view>
					<view style="background-color: #f12e32;height: 80upx;width: 28upx;margin-left: 73upx;"></view>
				</view>
				<view class="content-list">
					<view style="background-color: #f12e32;height: 40upx;width: 33upx;"></view>
					<view style="height: 40upx;width:50upx;background: #FFFFFF;"></view>
					<view style="height: 30upx;width:300upx;text-align: left;padding-left: 20upx;">
						<image src="../../static/img/vs.jpg" style="width:43upx;height: 18upx;margin-bottom: 15upx;margin-left:15upx;"></image>
					</view>
					<view style="float: right;background-color: #f12e32;height: 40upx;width: 28upx;margin-left: 323upx;"></view>
				</view>
				<view class="content-list">
					<view style="background-color: #f12e32;height: 80upx;width: 33upx;"></view>
					<view style="height: 80upx;width:50upx;background: #FFFFFF;">
						<image v-if="i[0].score<i[1].score" src="../../static/img/win.png" style="float:right;width:40upx;height: 53upx;padding-top: 10upx;"></image>
					</view>
					<view style="height: 70upx;width:300upx;text-align: left;padding-top: 9upx;padding-left: 20upx;border-bottom: 1upx solid #C8C7CC;">
						<span style="font-size: 25upx;color: #ff0047;font-weight: bold;">{{i[1].realName}}</span>
					</view>
					<view style="height: 70upx;width: 250upx;text-align: right;padding-top: 9upx;border-bottom: 1upx solid #C8C7CC;">
						<span style="font-size: 25upx;color: #ff0047;font-weight: bold;">{{(i[1].score*100).toFixed(2)}}</span>
					</view>
					<view style="background-color: #f12e32;height: 80upx;width: 28upx;margin-left: 73upx;"></view>
				</view>
			</view>
			<view class="content">
				<view class="content-list">
					<view style="background-color: #f12e32;height: 40upx;width: 33upx;"></view>
					<view style="height: 40upx;width:50upx;background: #FFFFFF;"></view>
					<view style="height: 30upx;width:300upx;text-align: left;padding-left: 20upx;"></view>
					<view style="float: right;background-color: #f12e32;height: 40upx;width: 28upx;margin-left: 323upx;"></view>
				</view>
			</view>
			<view style="width: 100%;height: 20upx;background-color: #f12e32;"></view>
			
			
			<image src="../../static/img/fz_gb.jpg" style="width: 750upx;height: 131upx;"></image>
			<view class="content" v-for="i in gbList" :key="i[0].userName">
				<view class="content-list">
					<view style="background-color: #f12e32;height: 80upx;width: 33upx;"></view>
					<view style="height: 80upx;width:50upx;background: #FFFFFF;">
						<image v-if="i[0].score>i[1].score" src="../../static/img/win.png" style="float:right;width:40upx;height: 53upx;padding-top: 10upx;"></image>
					</view>
					<view style="height: 70upx;width:100upx;text-align: left;padding-top: 10upx;padding-left: 30upx;">
						<span style="font-size: 25upx;color: #ff0047;font-weight: bold;">{{i[0].realName}}</span>
					</view>
					<view style="height: 70upx;width:360upx;text-align: center;padding-top: 10upx;">
						<span style="font-size: 25upx;color: #ff0047;font-weight: bold;">{{i[0].orgName}}</span>
					</view>
					<view style="height: 70upx;width: 83upx;text-align: right;padding-top: 10upx;">
						<span style="font-size: 25upx;color: #ff0047;font-weight: bold;">{{(i[0].score*100).toFixed(2)}}</span>
					</view>
					<view style="background-color: #f12e32;height: 80upx;width: 28upx;margin-left: 73upx;"></view>
				</view>
				<view class="content-list">
					<view style="background-color: #f12e32;height: 40upx;width: 33upx;"></view>
					<view style="height: 40upx;width:50upx;background: #FFFFFF;"></view>
					<view style="height: 30upx;width:300upx;text-align: left;padding-left: 20upx;">
						<image src="../../static/img/vs.jpg" style="width:43upx;height: 18upx;margin-bottom: 15upx;margin-left:15upx;"></image>
					</view>
					<view style="float: right;background-color: #f12e32;height: 40upx;width: 28upx;margin-left: 323upx;"></view>
				</view>
				<view class="content-list">
					<view style="background-color: #f12e32;height: 80upx;width: 33upx;"></view>
					<view style="height: 80upx;width:50upx;background: #FFFFFF;">
						<image v-if="i[0].score<i[1].score" src="../../static/img/win.png" style="float:right;width:40upx;height: 53upx;padding-top: 10upx;"></image>
					</view>
					<view style="height: 70upx;width:100upx;text-align: left;padding-top: 9upx;padding-left: 30upx;border-bottom: 1upx solid #C8C7CC;">
						<span style="font-size: 25upx;color: #ff0047;font-weight: bold;">{{i[1].realName}}</span>
					</view>
					<view style="height: 70upx;width:360upx;text-align: center;padding-top: 9upx;border-bottom: 1upx solid #C8C7CC;">
						<span style="font-size: 25upx;color: #ff0047;font-weight: bold;">{{i[1].orgName}}</span>
					</view>
					<view style="height: 70upx;width: 83upx;text-align: right;padding-top: 9upx;border-bottom: 1upx solid #C8C7CC;">
						<span style="font-size: 25upx;color: #ff0047;font-weight: bold;">{{(i[1].score*100).toFixed(2)}}</span>
					</view>
					<view style="background-color: #f12e32;height: 80upx;width: 28upx;margin-left: 73upx;"></view>
				</view>
			</view>
			<view class="content">
				<view class="content-list">
					<view style="background-color: #f12e32;height: 40upx;width: 33upx;"></view>
					<view style="height: 40upx;width:50upx;background: #FFFFFF;"></view>
					<view style="height: 30upx;width:300upx;text-align: left;padding-left: 20upx;"></view>
					<view style="float: right;background-color: #f12e32;height: 40upx;width: 28upx;margin-left: 323upx;"></view>
				</view>
			</view>
			<view style="width: 100%;height: 20upx;background-color: #f12e32;"></view>
			
			
			<image src="../../static/img/fz_dg.jpg" style="width: 750upx;height: 131upx;"></image>
			<view class="content" v-for="i in dgList" :key="i[0].userName">
				<view class="content-list">
					<view style="background-color: #f12e32;height: 80upx;width: 33upx;"></view>
					<view style="height: 80upx;width:50upx;background: #FFFFFF;">
						<image v-if="i[0].score>i[1].score" src="../../static/img/win.png" style="float:right;width:40upx;height: 53upx;padding-top: 10upx;"></image>
					</view>
					<view style="height: 70upx;width:100upx;text-align: left;padding-top: 10upx;padding-left: 30upx;">
						<span style="font-size: 25upx;color: #ff0047;font-weight: bold;">{{i[0].realName}}</span>
					</view>
					<view style="height: 70upx;width:360upx;text-align: center;padding-top: 10upx;">
						<span style="font-size: 25upx;color: #ff0047;font-weight: bold;">{{i[0].orgName}}</span>
					</view>
					<view style="height: 70upx;width: 83upx;text-align: right;padding-top: 10upx;">
						<span style="font-size: 25upx;color: #ff0047;font-weight: bold;">{{(i[0].score*100).toFixed(2)}}</span>
					</view>
					<view style="background-color: #f12e32;height: 80upx;width: 28upx;margin-left: 73upx;"></view>
				</view>
				<view class="content-list">
					<view style="background-color: #f12e32;height: 40upx;width: 33upx;"></view>
					<view style="height: 40upx;width:50upx;background: #FFFFFF;"></view>
					<view style="height: 30upx;width:300upx;text-align: left;padding-left: 20upx;">
						<image src="../../static/img/vs.jpg" style="width:43upx;height: 18upx;margin-bottom: 15upx;margin-left:15upx;"></image>
					</view>
					<view style="float: right;background-color: #f12e32;height: 40upx;width: 28upx;margin-left: 323upx;"></view>
				</view>
				<view class="content-list">
					<view style="background-color: #f12e32;height: 80upx;width: 33upx;"></view>
					<view style="height: 80upx;width:50upx;background: #FFFFFF;">
						<image v-if="i[0].score<i[1].score" src="../../static/img/win.png" style="float:right;width:40upx;height: 53upx;padding-top: 10upx;"></image>
					</view>
					<view style="height: 70upx;width:100upx;text-align: left;padding-top: 9upx;padding-left: 30upx;border-bottom: 1upx solid #C8C7CC;">
						<span style="font-size: 25upx;color: #ff0047;font-weight: bold;">{{i[1].realName}}</span>
					</view>
					<view style="height: 70upx;width:360upx;text-align: center;padding-top: 9upx;border-bottom: 1upx solid #C8C7CC;">
						<span style="font-size: 25upx;color: #ff0047;font-weight: bold;">{{i[1].orgName}}</span>
					</view>
					<view style="height: 70upx;width: 83upx;text-align: right;padding-top: 9upx;border-bottom: 1upx solid #C8C7CC;">
						<span style="font-size: 25upx;color: #ff0047;font-weight: bold;">{{(i[1].score*100).toFixed(2)}}</span>
					</view>
					<view style="background-color: #f12e32;height: 80upx;width: 28upx;margin-left: 73upx;"></view>
				</view>
			</view>
			<view class="content">
				<view class="content-list">
					<view style="background-color: #f12e32;height: 40upx;width: 33upx;"></view>
					<view style="height: 40upx;width:50upx;background: #FFFFFF;"></view>
					<view style="height: 30upx;width:300upx;text-align: left;padding-left: 20upx;"></view>
					<view style="float: right;background-color: #f12e32;height: 40upx;width: 28upx;margin-left: 323upx;"></view>
				</view>
			</view>
			<view style="width: 100%;height: 20upx;background-color: #f12e32;"></view>
			
			
			<image src="../../static/img/fz_sc.jpg" style="width: 750upx;height: 131upx;"></image>
			<view class="content" v-for="i in scList" :key="i[0].userName">
				<view class="content-list">
					<view style="background-color: #f12e32;height: 80upx;width: 33upx;"></view>
					<view style="height: 80upx;width:50upx;background: #FFFFFF;">
						<image v-if="i[0].score>i[1].score" src="../../static/img/win.png" style="float:right;width:40upx;height: 53upx;padding-top: 10upx;"></image>
					</view>
					<view style="height: 70upx;width:100upx;text-align: left;padding-top: 10upx;padding-left: 30upx;">
						<span style="font-size: 25upx;color: #ff0047;font-weight: bold;">{{i[0].realName}}</span>
					</view>
					<view style="height: 70upx;width:360upx;text-align: center;padding-top: 10upx;">
						<span style="font-size: 25upx;color: #ff0047;font-weight: bold;">{{i[0].orgName}}</span>
					</view>
					<view style="height: 70upx;width: 83upx;text-align: right;padding-top: 10upx;">
						<span style="font-size: 25upx;color: #ff0047;font-weight: bold;">{{(i[0].score*100).toFixed(2)}}</span>
					</view>
					<view style="background-color: #f12e32;height: 80upx;width: 28upx;margin-left: 73upx;"></view>
				</view>
				<view class="content-list">
					<view style="background-color: #f12e32;height: 40upx;width: 33upx;"></view>
					<view style="height: 40upx;width:50upx;background: #FFFFFF;"></view>
					<view style="height: 30upx;width:300upx;text-align: left;padding-left: 20upx;">
						<image src="../../static/img/vs.jpg" style="width:43upx;height: 18upx;margin-bottom: 15upx;margin-left:15upx;"></image>
					</view>
					<view style="float: right;background-color: #f12e32;height: 40upx;width: 28upx;margin-left: 323upx;"></view>
				</view>
				<view class="content-list">
					<view style="background-color: #f12e32;height: 80upx;width: 33upx;"></view>
					<view style="height: 80upx;width:50upx;background: #FFFFFF;">
						<image v-if="i[0].score<i[1].score" src="../../static/img/win.png" style="float:right;width:40upx;height: 53upx;padding-top: 10upx;"></image>
					</view>
					<view style="height: 70upx;width:100upx;text-align: left;padding-top: 9upx;padding-left: 30upx;border-bottom: 1upx solid #C8C7CC;">
						<span style="font-size: 25upx;color: #ff0047;font-weight: bold;">{{i[1].realName}}</span>
					</view>
					<view style="height: 70upx;width:360upx;text-align: center;padding-top: 9upx;border-bottom: 1upx solid #C8C7CC;">
						<span style="font-size: 25upx;color: #ff0047;font-weight: bold;">{{i[1].orgName}}</span>
					</view>
					<view style="height: 70upx;width: 83upx;text-align: right;padding-top: 9upx;border-bottom: 1upx solid #C8C7CC;">
						<span style="font-size: 25upx;color: #ff0047;font-weight: bold;">{{(i[1].score*100).toFixed(2)}}</span>
					</view>
					<view style="background-color: #f12e32;height: 80upx;width: 28upx;margin-left: 73upx;"></view>
				</view>
			</view>
			<view class="content">
				<view class="content-list">
					<view style="background-color: #f12e32;height: 40upx;width: 33upx;"></view>
					<view style="height: 40upx;width:50upx;background: #FFFFFF;"></view>
					<view style="height: 30upx;width:300upx;text-align: left;padding-left: 20upx;"></view>
					<view style="float: right;background-color: #f12e32;height: 40upx;width: 28upx;margin-left: 323upx;"></view>
				</view>
			</view>
			<view style="width: 100%;height: 20upx;background-color: #f12e32;"></view>
		</view>
	</view>	
</template>

<script>
	export default {
		data() {
			return {
				jgList: [],
				gbList: [],
				dgList: [],
				scList: [],
			}
		},
		onLoad: function() {
			uni.request({
				url: 'http://' + getApp().globalData.urlStr + '/GetAllCombatRes',
				method: 'GET',
				data: {},
				success: res => {
					if (res.data.code == 0) {
						this.jgList = res.data.data["jgMapRes"];
						this.gbList = res.data.data["gbMapRes"];
						this.dgList = res.data.data["dgMapRes"];
						this.scList = res.data.data["scMapRes"];
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},
	}
</script>

<style>
	.content {
		background-color: #FFFFFF;
		padding: 0 0;
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.content-list {
		display: flex;
		flex-direction: row;
	}

	.a {
		height: 100upx;
		background-color: #4CD964;
		border: 1upx solid #FFFFFF;
	}
</style>
