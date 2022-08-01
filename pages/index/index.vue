<template>
	<view class="content">
		<view class="head">
			<img src="../../static/logo2.png" alt="" class="log">
			<view class="right">
				<view><text>下载APP</text><text>登陆</text></view>
			</view>
		</view>
		<view class="title">
			<view v-for="(item,index) in list" :key="index" class="tit1">
				{{item}}
			</view>
		</view>
		<view class="title">
			<view v-for="(item,index) in list2" :key="index" class="tit1">
				{{item}}
			</view>
		</view>
		<view class="content">
			<view class="title2">
				<view v-for="(item,index) in list3" :key="index" class="tit1">
					{{item}}
				</view>
			</view>
			<view class="box">
				<view v-for="(item,index) in work" :key="index" class="nn">
					<view><img :src="item.img" alt=""></view>
					<view>{{item.name}}</view>
					<view class="money">{{item.money}}</view>
					<view>{{item.you}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import myrequest from "@/request/api.js"
	export default {
		data() {
			return {
				list:["首页","免费课","实战课","体系课"],
				list2:["专栏","手记","慕课教程"],
				list3:["全部","零基础","进阶课"],
				work:[
					{
						img:"../../static/img1.jpg",
						name:"70人学习.新上好课",
						money:"￥11999",
						you:"优惠价"
					},
					{
						img:"../../static/img1.jpg",
						name:"70人学习.新上好课",
						money:"￥11999",
						you:"优惠价"
					},
					{
						img:"../../static/img1.jpg",
						name:"70人学习.新上好课",
						money:"￥11999",
						you:"优惠价"
					},
					{
						img:"../../static/img1.jpg",
						name:"70人学习.新上好课",
						money:"￥11999",
						you:"优惠价"
					},
					{
						img:"../../static/img1.jpg",
						name:"70人学习.新上好课",
						money:"￥11999",
						you:"优惠价"
					},
					{
						img:"../../static/img1.jpg",
						name:"70人学习.新上好课",
						money:"￥11999",
						you:"优惠价"
					},
					{
						img:"../../static/img1.jpg",
						name:"70人学习.新上好课",
						money:"￥11999",
						you:"优惠价"
					},
					{
						img:"../../static/img1.jpg",
						name:"70人学习.新上好课",
						money:"￥11999",
						you:"优惠价"
					}
				]
			}
		},
		onLoad() {
			
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.content{
		.head{
			display: flex;
			.log{
				width: 150rpx;
				height: 50rpx;
			}
			.right{
				margin-left: 40%;
		
				border-radius: 20rpx;
				background: pink;
				padding: 10px;
				opacity: .5;
				border: 1px solid red;
				text{	
					margin-right: 12rpx;
					color: red;	
					font-weight: bold;
				}
			}
		}
		.title{
			display: flex;
			margin-top: 15rpx;
			font-size: 14rpx;
			font-weight: bold;
			.tit1{
				margin-left: 15rpx;
			}
		}
		.content{
			width: 100%;
			background: #ccc;
			margin-top: 15rpx;
			.title2{
				display: flex;
				justify-content: flex-start;
				margin-bottom: 15rpx;
				view{
					margin-left: 35rpx;
					margin-top: 15rpx;
				}
			}
			.box{
				display: flex;
				flex-wrap: wrap;
				img{
					width: 340rpx;
					height: 200rpx;
					
				}
				.nn{
					view{
						margin-left: 15px;
					}
					.money{
						color: red;
						font-weight: bold;
					}
				}
			}
		}
	}
</style>
