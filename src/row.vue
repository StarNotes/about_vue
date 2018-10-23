<template>
    <div class="row" :style="rowstyle" :class="rowClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:"GRow",
        props:{
            gutter:{
                type:[Number,String]
            },
            align:{
                type:String,
                validate (value) {
                    return ['left','right','center'].includes(value);
                }
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

        },
        computed:{
            rowClass(){
                let {align} = this;
                return [align && `align-${align}`]

            },
            rowstyle(){
                let {gutter} = this;
                return {
                    marginLeft:- gutter/2+'px',
                    marginRight:- gutter/2+'px'
                }
            }
        }
    }
</script>
<style scoped lang="scss">
   .row{
       display: flex;
       flex-wrap: wrap;
       &.align-left{
           justify-content: flex-start;
       }
       &.align-right{
           justify-content: flex-end;
       }
       &.align-center{
           justify-content: center;
       }
   }
</style>