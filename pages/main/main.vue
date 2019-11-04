<template>
    <view class="content">
        <view class="hello">
            <view v-if="userName" class="title">
                您好 {{userName}}，您已成功登录。
            </view>
			<view v-if="!userName" class="title">
				暂未登录无法浏览信息，请点击右下角“我的”登录！
			</view>
            <view class="ul">
                <view></view>
                <view>在 “我的” 中点击 “退出” 可以 “注销当前账户”</view>
            </view>
        </view>
    </view>
</template>

<script>
    import {
        mapState
    } from 'vuex'

    export default {
		data(){
			return {
				userName:"",
			}
		},
		onLoad:function(e){
			uni.request({
				url: 'http://localhost:8080/Check',
				method: 'GET',
				data: {},
				success: res => {
					if (res.data.code == 0){
						this.userName = res.data.data;
					}
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
        color: #8f8f94;
        margin-top: 50upx;
    }

    .ul {
        font-size: 30upx;
        color: #8f8f94;
        margin-top: 50upx;
    }

    .ul>view {
        line-height: 50upx;
    }
</style>
