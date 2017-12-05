<template>
  <div class="header">
    <div class="box">
      <div>
        <a href="#">好的生活，没那么贵</a>
      </div>
      <div class="box-child">
        <div class="child-one"><a href="#">登录</a><a href="#">注册</a></div>
        <div><a href="#">我的订单</a></div>
        <div><a href="#">严选会员</a></div>
        <div><a href="#">企业采购</a></div>
        <div><a href="#" class="kehu" @mouseover="xianshikehu" @mouseleave="baibai">客户服务<i type="type" :class="type==1?one:two"></i></a>
        </div>
        <el-dropdown>
            <span class="el-dropdown-link">
               <a href="#" style="border: none;"><i class="iconfont icon-mobile"></i>下载APP</a>
            </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item class="erweima"><img src="../../../static/images/wbXO-CMVgQ==.jpg"/><p>下载领1000元新人礼包</p></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="list" ref="list">
        <div>在线客服</div>
        <div>帮助中心</div>
        <div>商务合作</div>
        <div style="border: none;">开发平台</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "home",
      data() {
        return {
          type: 1,  //判断上下箭头
          one: "iconfont icon-up",
          two: "iconfont icon-down"
        }
      },
      methods: {
        xianshikehu() {
          this.type = 2
          this.$refs.list.style.display = "block"
        },
        baibai() {
          this.type = 1
          this.$refs.list.style.display = "none"
        }
      }
  }
</script>

<style lang="scss" scoped>
  .el-dropdown-link {
    a {
      font-size: 12px;
    }
  }
  .header {
    width: 100%;
    height: 36px;
    background: #333333;
  }
  .erweima {
    padding: 0;
    text-align: center;
    img {
      width: 150px;
      height: 150px;
    }
    p {
      font-size: 14px;
      color: #ccc;
    }
  }
  .box {
    width: 1090px;
    height: 36px;
    margin: 0 auto;
    line-height: 36px;
    color: #ccc;
    font-size: 12px;
    position: relative;
    .list {
      position: absolute;
      left: 915px;
      top: 36px;
      color: #ccc;
      box-shadow: 0 0 10px;
      display: none;
      width: 92px;
      text-align: center;
      z-index: 999;
      background: #fff;
      div {
        margin: 0 auto;
        width: 50px;
        text-align: center;
        display: block;
        padding: 5px;
        border-bottom: 1px solid #ccc;
      }
    }
    div {
      display: inline-block;
      a {
        color: #ccc;
      }
      a:hover {
        color: #fff;
      }
    }
    .box-child {
      margin-left: 508px;
      display: inline-block;
      .iconfont {
        font-size: 10px;
        margin-left: 5px;
        color: #ccc;
      }
      div {
        margin-left: 10px;
        a {
          height: 16px;
          border-right: 1px solid #5c5c5c;
          padding-right: 10px;
        }
      }
      .child-one {
        a:nth-child(1) {
          border: none;
        }
      }
    }
  }
</style>
