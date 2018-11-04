<template>
    <div class="toast" ref="wrapper" :class="toastClasses">
        <slot></slot>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
</template>
<script>
    export default {
        name:"GuluToast",
        props:{
            autoClose:{
                type:Boolean,
                default:true
            },
            autoCloseDelay:{
                type: Number,
                default: 50
            },
            closeButton:{
                type:Object,
                default:()=>{
                    return {
                        text:"关闭",
                        callback:undefined
                    }
                }
            },
            position:{
                type:String,
                default:'top',
                validate(value){
                    return ['top','middle','bottom'].indexOf(value)>=0
                }
            }
        },
        computed:{
            toastClasses () {
              return {
                  [`position-${this.position}`]:true
              }
            }
        },
        mounted(){
            this.updateStyle();
            this.execAutoClose();
        },
        methods:{
            execAutoClose(){
                if(this.autoClose){
                    setTimeout(()=>{
                        this.close();
                    },this.autoCloseDelay * 1000)
                }
            },
            updateStyle(){
                //时间延迟
                this.$nextTick(()=>{
                    //获取父元素的高度并赋值给line
                    this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
                })
            },
            close(){
                //元素remove
                this.$el.remove();
                //组件销毁
                this.$destroy();
            },
            onClickClose(){
                this.close();
                if(this.closeButton && typeof this.closeButton.callback != 'undefined'){
                    this.closeButton.callback();
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    $font-size:14px;
    $toast-min-height:40px;
    $toast-bg:rgba(0,0,0,0.75);
    .toast{
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        font-size: $font-size;
        line-height: 1.8;
        min-height: $toast-min-height;;
        display: flex;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
        padding: 0px 16px;
        color: #fff;
        .close{
            padding-left: 16px;
            flex-shrink: 0;
        }
        .line{
            height: 100%;
            border-left: 1px solid #666;
            margin-left: 16px;
        }
        &.position-top{
            top:0;
            transform: translateX(-50%);
        }
        &.position-bottom{
            bottom:0;
            transform: translateX(-50%);
        }
        &.position-middle{
            top:50%;
            transform: translate(-50%,-50%);
        }
    }

</style>