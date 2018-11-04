import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Toast from './toast'
import Plugin from './plugin'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-toast',Toast)
Vue.use(Plugin);

new Vue({
    el:"#app",
    data:{
        loading1:false,
        loading2:true,
        loading3:false,
        message:"so",
    },
    created(){

    },
    methods:{
        inputChange(e){

        },
        showToast () {
            this.$toast('我是message',{
                closeButton: {
                    text:"知道了",
                    callback(){
                        console.log("关闭吧")
                    },
                    autoClose: true,
                    autoCloseDelay: 3,
                    position:'bottom'
                }
            })
        }
    }
})

