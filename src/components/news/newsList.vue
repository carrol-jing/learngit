<template>
    <div>
        <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" >
        <router-link :to="'/home/newsInfo/2'">
          <img class="mui-media-object mui-pull-left" src="../../images/menu2.png">
          <div class="mui-media-body">
            <h1>first</h1>
            <p class='mui-ellipsis'>
              <span>发表时间：{{ item.time | dataFormat }}</span>
              <span>点击：<!--{{item.click}}-->次</span>
            </p>
          </div>
        </router-link>
      </li>

    </ul>
    </div>
</template>

<script>
import {Toast} from "minimatch"
export default {
    data() {
        return {
            newslist:[],
            item:{time:new Date()}
        }
    },
    created(){
        // getNews()
    },
    methods:{
        getNews(){
            this.$hhtp.get("api/getnewslist").then(result=>{
                if(result.body.status===0){
                    this.newslist=result.body.message;
                }else{
                    Toast("error")
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{
            font-size: 14px;
        }
        .mui-ellipsis{
            font-size: 12px;
            color: #1499e6;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>