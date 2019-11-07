<template>
	<view class="content">
		<view class="hello">
			<view class="title">
				分机构：
			</view>
			<view v-for="i in f" :key="i.Id">
				<view>{{i}}</view>
			</view>
			<view class="title">
				贵宾经理：
			</view>
			<view v-for="i in g" :key="i.Id">
				<view>{{i}}</view>
			</view>
			<view class="title">
				低柜经理：
			</view>
			<view v-for="i in d" :key="i.Id">
				<view>{{i}}</view>
			</view>
			<view class="title">
				市场经理：
			</view>
			<view v-for="i in s" :key="i.Id">
				<view>{{i}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				f: [],
				g: [],
				d: [],
				s: [],
			}
		},
		onLoad:function(){
			uni.request({
				url: 'http://localhost/GetTop',
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
