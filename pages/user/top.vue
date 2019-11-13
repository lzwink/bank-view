<template>
	<view class="content" style="background-color: #FFFFFF;">
		<view class="hello">
			<image src="../../static/img/top.jpg" style="width: 750upx;height: 574upx;"></image>
			<image src="../../static/img/jg_top.jpg" style="width: 750upx;height: 131upx;"></image>
			<view style="display: inline-block;" v-for="(i, index) in f" :key="i.real_name">
				<view style="float: left;background-color: #f12e32;height: 80upx;width: 33upx;"></view>
				<view style="float: left;height: 80upx;width:125upx;background: #FFFFFF;">
					<image :src="getImgUrl(index+1)" style="float:right;width:40upx;height: 53upx;padding-top: 10upx;"></image>
				</view>
				<view style="float: left;height: 70upx;width:450upx;background: #FFFFFF;text-align: center;padding-top: 10upx;"><span
					 style="margin:0 auto;font-size: 22upx;color: #ff0047;font-weight: bold;">{{i}}</span></view>
				<view style="float: right;background-color: #f12e32;height: 80upx;width: 28upx;"></view>
			</view>

			<view style="width: 100%;height: 30upx;background-color: #f12e32;"></view>
			<image src="../../static/img/gb_top.jpg" style="width: 750upx;height: 131upx;"></image>
			<view style="display: inline-block;" v-for="(i, index) in g" :key="i.real_name">
				<view style="float: left;background-color: #f12e32;height: 80upx;width: 33upx;"></view>
				<view style="float: left;height: 80upx;width:125upx;background: #FFFFFF;">
					<image :src="getImgUrl(index+1)" style="float:right;width:40upx;height: 53upx;padding-top: 10upx;"></image>
				</view>
				<view style="float: left;height: 70upx;width:450upx;background: #FFFFFF;text-align: center;padding-top: 10upx;"><span
					 style="margin:0 auto;font-size: 22upx;color: #ff0047;font-weight: bold;">{{i}}</span></view>
				<view style="float: right;background-color: #f12e32;height: 80upx;width: 28upx;"></view>
			</view>

			<view style="width: 100%;height: 30upx;background-color: #f12e32;"></view>
			<image src="../../static/img/dg_top.jpg" style="width: 750upx;height: 131upx;"></image>
			<view style="display: inline-block;" v-for="(i, index) in d" :key="i.real_name">
				<view style="float: left;background-color: #f12e32;height: 80upx;width: 33upx;"></view>
				<view style="float: left;height: 80upx;width:125upx;background: #FFFFFF;">
					<image :src="getImgUrl(index+1)" style="float:right;width:40upx;height: 53upx;padding-top: 10upx;"></image>
				</view>
				<view style="float: left;height: 70upx;width:450upx;background: #FFFFFF;text-align: center;padding-top: 10upx;"><span
					 style="margin:0 auto;font-size: 22upx;color: #ff0047;font-weight: bold;">{{i}}</span></view>
				<view style="float: right;background-color: #f12e32;height: 80upx;width: 28upx;"></view>
			</view>

			<view style="width: 100%;height: 30upx;background-color: #f12e32;"></view>
			<image src="../../static/img/sc_top.jpg" style="width: 750upx;height: 51upx;"></image>
			<image src="../../static/img/sc_top.png" style="width: 750upx;height: 78upx;"></image>
			<view style="display: inline-block;" v-for="(i, index) in s" :key="i.real_name">
				<view style="float: left;background-color: #f12e32;height: 80upx;width: 33upx;"></view>
				<view style="float: left;height: 80upx;width:125upx;background: #FFFFFF;">
					<image :src="getImgUrl(index+1)" style="float:right;width:40upx;height: 53upx;padding-top: 10upx;"></image>
				</view>
				<view style="float: left;height: 70upx;width:450upx;background: #FFFFFF;text-align: center;padding-top: 10upx;"><span
					 style="margin:0 auto;font-size: 22upx;color: #ff0047;font-weight: bold;">{{i}}</span></view>
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
				url: 'http://' + getApp().globalData.urlStr + '/GetTop',
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
			getImgUrl(icon) {
				return require("../../static/img/top" + icon + ".png");
			}
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
