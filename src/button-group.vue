<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        //button-group出现在页面时触发
        mounted(){
            for(let node of this.$el.children){
                let name = node.nodeName.toLocaleLowerCase();
                if(name !== 'button'){
                    console.warn(`g-button-group的子元素应该都是g-button`)
                }
            }
        }
    }
</script>
<style lang="scss">
    .g-button-group{
        display: inline-flex;
        vertical-align: middle;
        > .g-button{
            border-radius: 0;
            &:not(:first-child){
                margin-left: -1px;
            }
            &:first-child{
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child{
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover{
                z-index: 1;
            }
        }
    }
</style>