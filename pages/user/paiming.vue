<template>
	<view class="content" style="background-color: #FFFFFF;">
		<view class="hello">
			<image src="../../static/img/pm_top.jpg" style="width: 750upx;height: 574upx;"></image>
			<image src="../../static/img/pm_jg.jpg" style="width: 750upx;height: 152upx;"></image>
			<view style="display: inline-block;" v-for="(i, index) in f" :key="i.userName">
				<view style="float: left;background-color: #f12e32;height: 80upx;width: 33upx;"></view>
				<view style="float: left;height: 75upx;width:70upx;color: #ff0047;font-weight: bold;padding-left: 45upx;text-align: center;padding-top: 5upx;">
					{{parseInt(index)+1}}
				</view>
				<view style="float: left;height: 70upx;width:410upx;text-align: center;"><span
					 style="margin:0 auto;font-size: 22upx;color: #ff0047;font-weight: bold;">{{i.realName}}</span></view>
				<view style="float: left;height: 75upx;width: 100upx; font-weight: bold;color: #ff0047;text-align: center;padding-top: 5upx;">{{(i.score*100).toFixed(2)}}</view>
				<view style="float: right;background-color: #f12e32;height: 80upx;width: 28upx;"></view>
			</view>

			<view style="width: 100%;height: 30upx;background-color: #f12e32;"></view>
			<image src="../../static/img/pm_gb.jpg" style="width: 750upx;height: 152upx;"></image>
			<view style="display: inline-block;" v-for="(i, index) in g" :key="i.userName">
				<view style="float: left;background-color: #f12e32;height: 80upx;width: 33upx;"></view>
				<view style="float: left;height: 75upx;width:70upx;color: #ff0047;font-weight: bold;padding-left: 45upx;text-align: center;padding-top: 5upx;">
					{{parseInt(index)+1}}
				</view>
				<view style="float: left;height: 70upx;width:220upx;text-align: center;"><span
					 style="margin:0 auto;font-size: 22upx;color: #ff0047;font-weight: bold;">{{i.realName}}</span></view>
				<view style="float: left;height: 75upx;width: 130upx; font-weight: bold;color: #ff0047;text-align: center;padding-top: 5upx;">{{(i.score*100).toFixed(2)}}</view>
				<view style="float: left;height: 75upx;width: 130upx; font-weight: bold;color: #ff0047;text-align: center;padding-top: 5upx;padding-left: 50upx;">{{(i.jixiao).toFixed(2)}}</view>
				<view style="float: right;background-color: #f12e32;height: 80upx;width: 28upx;"></view>
			</view>

			<view style="width: 100%;height: 30upx;background-color: #f12e32;"></view>
			<image src="../../static/img/pm_dg.jpg" style="width: 750upx;height: 152upx;"></image>
			<view style="display: inline-block;" v-for="(i, index) in d" :key="i.userName">
				<view style="float: left;background-color: #f12e32;height: 80upx;width: 33upx;"></view>
				<view style="float: left;height: 75upx;width:70upx;color: #ff0047;font-weight: bold;padding-left: 45upx;text-align: center;padding-top: 5upx;">
					{{parseInt(index)+1}}
				</view>
				<view style="float: left;height: 70upx;width:220upx;text-align: center;"><span
					 style="margin:0 auto;font-size: 22upx;color: #ff0047;font-weight: bold;">{{i.realName}}</span></view>
				<view style="float: left;height: 75upx;width: 130upx; font-weight: bold;color: #ff0047;text-align: center;padding-top: 5upx;">{{(i.score*100).toFixed(2)}}</view>
				<view style="float: left;height: 75upx;width: 130upx; font-weight: bold;color: #ff0047;text-align: center;padding-top: 5upx;padding-left: 50upx;">{{(i.jixiao).toFixed(2)}}</view>
				<view style="float: right;background-color: #f12e32;height: 80upx;width: 28upx;"></view>
			</view>

			<view style="width: 100%;height: 30upx;background-color: #f12e32;"></view>
			<image src="../../static/img/pm_sc.jpg" style="width: 750upx;height: 152upx;"></image>
			<view style="display: inline-block;" v-for="(i, index) in s" :key="i.userName">
				<view style="float: left;background-color: #f12e32;height: 80upx;width: 33upx;"></view>
				<view style="float: left;height: 75upx;width:70upx;color: #ff0047;font-weight: bold;padding-left: 45upx;text-align: center;padding-top: 5upx;">
					{{parseInt(index)+1}}
				</view>
				<view style="float: left;height: 70upx;width:220upx;text-align: center;"><span
					 style="margin:0 auto;font-size: 22upx;color: #ff0047;font-weight: bold;">{{i.realName}}</span></view>
				<view style="float: left;height: 75upx;width: 130upx; font-weight: bold;color: #ff0047;text-align: center;padding-top: 5upx;">{{(i.score*100).toFixed(2)}}</view>
				<view style="float: left;height: 75upx;width: 130upx; font-weight: bold;color: #ff0047;text-align: center;padding-top: 5upx;padding-left: 50upx;">{{(i.jixiao).toFixed(2)}}</view>
				<view style="float: right;background-color: #f12e32;height: 80upx;width: 28upx;"></view>
			</view>

			<view style="width: 100%;height: 60upx;background-color: #f12e32;"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				f: [],
				g: [],
				d: [],
				s: [],
			}
		},
		onLoad: function() {
			uni.request({
				url: 'http://' + getApp().globalData.urlStr + '/GetTopAll',
				method: 'GET',
				data: {},
				success: res => {
					this.f = res.data.data.f;
					this.g = res.data.data.g;
					this.d = res.data.data.d;
					this.s = res.data.data.s;
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
