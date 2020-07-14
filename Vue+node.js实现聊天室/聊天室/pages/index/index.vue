<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left">
				<image src="../../static/img/icon-test.png"></image>
			</view>
			<view class="top-bar-center">
				<image src="../../static/images/huo.png"></image>
			</view>
			<view class="top-bar-right">
				<view class="search">
					<image src="../../static/images/search.png"></image>
				</view>
				<view class="add">
					<image src="../../static/images/add.png"></image>
				</view>
			</view>
			<view class="main">
				<view class="apply">
				</view>
				<view class="friend">
					<view class="friend-list" v-for="(item,index) in friends" :keys="item.id">
						<view class="friend-list-l">
							<text class="tip">{{item.tip}}</text>
							<image :src="item.imgurl"></image>
						</view>
						<view class="friend-list-r">
							<view class="top clearfix">
								<view class="name">{{item.name}}</view>
								<view class="time">{{changeTime(item.time)}}</view>
							</view>
							<view class="news">{{item.news}}
							</view>
						</view>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import datas from '../../commons/js/datas.js'
	import myfun from '../../commons/js/myfun.js'
	export default {
		data() {
			return {
				friends: [],
			}
		},
		onLoad() {
			this.getFriends()
		},
		methods: {
			changeTime: function(date) {
				return myfun.dateTime(date)
			},

			getFriends: function() {
				this.friends = datas.friends();
				for (let i = 0; i < this.friends.length; i++) {
					this.friends[i].imgurl = "../../static/img/" + this.friends[i].imgurl + '.png';
				}

				console.log(this.friends)
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
	}

	.top-bar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 88rpx;
		background: $uni-bg-color;
		box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, .1);

		.top-bar-left {
			float: left;
			padding-top: 10rpx;
			padding-left: 22rpx;

			image {
				// padding-top:4rpx ;
				width: 68rpx;
				height: 68rpx;
				border-radius: 16rpx;
			}
		}

		.top-bar-center {
			position: absolute;
			text-align: center;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			margin: auto;

			image {
				width: 88rpx;
				height: 88rpx;
			}
		}

		.top-bar-right {
			float: right;

			image {

				padding-top: 19rpx;
				width: 50rpx;
				height: 50rpx;
			}

			.search {
				padding-right: 40rpx;
				display: inline-block;
			}

			.add {
				padding-right: 22rpx;
				display: inline-block;
			}
		}
	}

	.main {
		padding-top: 104rpx;
		// border: 1px solid red;
	}

	.clearfix:before,
	.clearfix:after {
		content: "";
		display: table;
	}

	.clearfix::after {
		clear: both;
	}

	.friend-list {
		height: 96rpx;
		padding: 16rpx 22rpx;

		&:active {
			background-color: black;
		}

		.friend-list-l {
			position: relative;
			float: left;


			image {
				width: 96rpx;
				height: 96rpx;
				border-radius: 24px;
			}

			.tip {
				position: absolute;
				top: 0;
				width: 30rpx;
				height: 30rpx;
				z-index: 1;
				left: 68rpx;
				border-radius: 50%;
				font-size: 24rpx;
				background-color: red;
				color: white;
				text-align: center;
			}
		}

		.friend-list-r {
			padding-left: 128rpx;

			.top {
				height: 25px;

				.name {
					float: left;
					font-size: 36rpx;
					font-weight: 400;
					color: black;
					line-height: 50rpx;
				}

				.time {
					// display: none;
					float: right;
					font-size: 24rpx;
					color: black;
					line-height: 50rpx;
				}
			}

			.news {
				// padding-top: 24.8px;
				font-size: 28rpx;
				line-height: 40rpx;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				/* 设置或检索伸缩盒对象的子元素的排列方式 */
				-webkit-box-orient: vertical;
				overflow: hidden;
			}
		}
	}
</style>
