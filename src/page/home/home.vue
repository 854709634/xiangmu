<template>
  <div id="home">
    <headers></headers>
    <div class="content">
          <img :src="this.toplogo" class="img-one"/>

      <!--右边的几个信息-->
      <div class="right-child">
        <div style="border-bottom: 1px solid #ccc;">
          <input type="text" placeholder="爆款鹅绒子母被折上折直降439元" @click="chuxian()">
        </div>
        <div><i class="el-icon-search"></i></div>
        <div>
            <el-badge :value="2" class="item">
            <i class="iconfont icon-star"></i>
          </el-badge>
        </div>

        <!--当文本框获取焦点时显示的数据-->
        <ul class="jiaodian" ref="jiaodian"  @mouseleave="hidden()">
          <p>大家都在搜</p>
          <li v-for="iptvalue in iptvalues"><a href="">{{iptvalue.keyword}}</a></li>
        </ul>
      </div>

      <!--分类列表-->
      <div class="lists">
          <div><a href="#">首页</a></div>
          <ul>
            <li v-for="list in listcontent" @mouseover="huoqu(list.id)" ><a href="#">{{list.name}}</a></li>
          </ul>

      </div>
    </div>

        <!--移上去出现的数据-->
        <div class="bcdata" ref="bcdata" @mouseleave="zaijian()">
          <div class="child-one" v-for="baocunde in baocunshuju">
            <img :src="baocunde.bannerUrl" />
            <p style="margin-top: 3px;">{{baocunde.name}}</p>
          </div>
        </div>
  </div>
</template>

<script>
  import  headers from "../headers/headers.vue"
  import  {contents, lists, iptvalue} from "@/service/getData"
  export default {
    name: "home",
    data(){
      return {
        alldata:[],   //获取logo数据
        toplogo:"",     //保存logo地址
        listcontent:[],  //保存分类的数据
        gezhongshuju:[],  //过滤每一项的数据
        baocunshuju:[],    //保存数据
        iptvalues :[]     //文本框数据
      }
    },
    components:{
      headers
    },
    methods:{
      huoqu(id){

        let ID = id
        this.gezhongshuju = this.listcontent.filter((item) => {
          return  item.id == ID
        })
        this.baocunshuju = this.gezhongshuju[0].subCateList
        this.$refs.bcdata.style.display = "block"
      },
      zaijian(){
        this.$refs.bcdata.style.display = "none"
      },
      chuxian() {
        this.$refs.jiaodian.style.display = "block"
      },
      hidden() {
        this.$refs.jiaodian.style.display = "none"
      }
    },
   async mounted(){
      //获取动态logo图片
     let res = await contents()
      this.alldata = [...res.data.topLogo.activityPicUrl]
      this.toplogo = this.alldata.join("")

     //获取分类数据
     let res1 = await lists()
     this.listcontent = [...res1.data.cateList]

     //获取文本框数据
     let res2 = await iptvalue()
     this.iptvalues = [...res2.data]
     console.log(this.iptvalues)
   }
  }
</script>

<style lang="scss" scoped>
#home {
  width: 100%;
}
.jiaodian {
  display: none;
  width: 254px;
  padding-left: 5px;
  border: 1px solid #ccc;
  border-top: none;
  background: #fff;
  p {
    font-size: 12px;
    color: #ccc;
    padding: 5px;
  }
  li {
    a{
      font-size: 12px;
      color: #b4282d;
      padding: 5px;
    }

  }
  li:hover {
      background: #ccc;
    }
  li:nth-last-child(1) {
    a {
      color: #000;

    }
  }

}
.bcdata {
  width: 1090px;
  margin: 0 auto;
  .child-one {
    width: 110px;
    text-align: center;
    display: inline-block;
    padding: 5px;
    margin-left: 30px;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 20px;
    img {
      margin:  0 auto;
    }
  }
  .child-one:hover {
    cursor: pointer;
    color: #b4a078;
  }
}
.lists {
  display: flex;
  align-items: center;
  ul {
    li {
      padding: 0 27px;
      text-align: center;
      display: inline-block;

      a {
        font-size: 14px;
        font-weight: 600;
      }
      a:hover {
        color: #b4a078;
        border-bottom: 3px solid #b4a078;
      }
    }
    li:nth-last-child(1){
      border-right: 1px solid #b4a078;
    }
  }
  div{
    padding: 0 20px;
    display: inline-block;
    a {
      color: #b4a078;
      border-bottom: 3px solid #b4a078;
      font-size: 14px;
      font-weight: 600;
    }
  }
}
  .content {
    width: 1090px;
    margin:0 auto;
    height: 204px;
    position: relative;
    .img-one {
      margin:0 auto;
    }
    .right-child {
      position: absolute;
      top: 35%;
      left: 70%;
      input {
        width: 252px;
        padding-left: 10px;
        color: #ccc;
        font-size: 12px;
        border: none;
        outline: none
      }
      div {
        display: inline-block;
      }
      .el-icon-search,.icon-star {
        font-size: 20px;
        color: #ccc;
      }
      .el-icon-search:hover,.icon-star:hover {
        color: #F4EBE2;
      }
    }
  }
</style>
