<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
    let validate = (value)=>{
        let keys = Object.keys(value);
        let valid = true;
        keys.forEach(key=>{
            if(!['span','offset'].includes(key)){
                valid = false;
            }
        })
        return valid
    }

    export default {
        name:"GCol",
        props:{
            span:{
                type:[Number,String]
            },
            offset:{
                type:[Number,String]
            },
            ipad:{
                type:Object,
                validate,
            },
            narrowPc:{
                type:Object,
                validate,
            },
            pc:{
                type:Object,
                validate,
            },
            widePc:{
                type:Object,
                validate,
            },
        },
        data(){
            return{
                gutter:{
                    type:[Number,String]
                }
            }
        },
        //监听计算
        computed:{
            colClass(){
                let {span,offset,ipad,narrowPc,pc,widePc} = this;

                return [
                    span && `col-${span}`,
                    offset && `offset-${offset}`,
                    ipad ? [`col-ipad-${ipad.span}`]:[],
                    narrowPc ? [`col-narrow-pc-${narrowPc.span}`]:[],
                    pc ? [`col-pc-${pc.span}`]:[],
                    widePc ? [`col-wide-pc-${widePc.span}`]:[]
                ]
            },
            colStyle(){
                return{
                    paddingLeft: this.gutter/2+'px',
                    paddingRight: this.gutter/2+'px'
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .col{
        height: 100%;
        $class-prefix:col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n / 24) * 100%;
            }
        }
        $class-prefix:offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
        @media (min-width: 576px){
            $class-prefix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix:offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }

        }
        @media (min-width: 768px){
            $class-prefix: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix:offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }

        }
        @media (min-width: 992px){
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix:offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }

        }
        @media (min-width: 1200px){
            $class-prefix: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
            $class-prefix:offset-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }

        }
    }

</style>

  Map.prototype.