<template>
    <div class="newsinfo">
        <h3 class="title">newsInfo--{{id}}</h3>
        <p class="subtitle">
            <span>发表时间：</span>
            <span>点击：0次</span>
        </p>
        <hr>
        <div class="content"></div>

        <comment-box></comment-box>
    </div>
</template>

<script>
import comment from '../subcomponents/comment.vue';
export default {
    data() {
        return {
            id:this.$route.params.id,
            newsinfo:{}
        }
    },
    created(){
        // getNewsinfo();
    },
    methods:{
        getNewsinfo(){
            this.$http.get('api/getnew/'+this.id).then(result=>{
                if(result.body.status===0){
                    this.newsinfo=result.body.message;
                }else{

                }
            })
        }
    },
    components:{
        'comment-box':comment
    }
}
</script>

<style lang="scss" scoped>
.newsinfo{
    padding: 0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: palevioletred;
    }
    .subtitle{
        font-size: 13px;
        color:blue;
        display: flex;
        justify-content: space-between;
    }
    .content{}
}
</style>