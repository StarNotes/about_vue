<template>
    <div class="row" :style="{marginLeft:- gutter/2+'px',marginRight:- gutter/2+'px'}">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:"GRow",
        props:{
            gutter:{
                type:[Number,String]
            }
        },
        //内存中生成对象
        created(){

        },
        //将对象挂到页面上
        mounted(){
            //子组件已append进来，且所有对象已挂载到页面上，可通过this.$children获取子元素
            this.$children.forEach((vm)=>{
                //通过父组件将gutter传到子组件
                vm.gutter = this.gutter;
            })

        }
    }
</script>
<style scoped lang="scss">
   .row{
       display: flex;
   }
</style>