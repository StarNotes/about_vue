<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}"
        @click="$emit('click')">
        <g-icon v-if="icon&&!loading" class="icon" :name="icon"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default {
        //props:['icon','iconPosition']
        props:{
            icon:{},
            loading:{
                type: Boolean,
                default: false
            },
            iconPosition:{
                type:String,
                default:'left'
            },
            //属性检查器，判断用户传值
            validator(value){
                return value === 'left' || value==='right'
            }
        }
    }
</script>
<style lang="scss">
    @keyframes spin {
        0% { transform: rotate(0deg);}
        100% { transform: rotate(360deg)}
    }
    .g-button{
        height: var(--button-height);
        font-size: var(--font-size);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background-color: var(--button-bg);
        vertical-align: middle;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        &:hover{
            border-color: var(--border-color-hover);
        }
        &:active{
            background-color: var(--button-active-bg);
        }
        &:focus{
            outline: none;
        }
        > .icon{
            order: 1;
            margin-left: 0;
            margin-right: .3em;
        }
        > .content{
            order: 2;
        }
        &.icon-right{
            > .icon{
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }
            > .content{
                order: 1;
            }
        }
        .loading{
            animation: spin 1s infinite linear;
        }
    }
</style>