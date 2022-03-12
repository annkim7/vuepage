<template>
    <div class="fnq-area">
        <div class="fnq-wrap">
            <div class="fnq-box">
                <ul class="fnq-list">
                    <li>
                        <span @click="toggle()" class="q">질문있어요</span>
                        <transition name="accordion">
                            <span v-if="slideUp" class="a" >답해주세요</span>
                        </transition>
                        
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name : 'Detail22',
    data(){
        return{
            slideUp : false,
        }
    },
    mounted(){

    },
    methods:{
        toggle(){
            this.slideUp = !this.slideUp;
        },
    }
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.fnq-area{
    @include layout;
}

.fnq-list{
    li{
        span{
            overflow: hidden;
            padding: 0.8rem 0.3rem;
            background:#f4f4f4;
        }
        .a{
            background:#ddd;
            transition: 0.6s linear 0.3s;
        }
    }
}


.accordion-enter-from{ opacity:0; }
.accordion-enter-active{ transition: all 0.8s;}
.accordion-enter-to{opacity:1;}

.accordion-leave-from{ opacity:1;}
.accordion-leave-active{ transition: all 0.8s;}
.accordion-leave-to{opacity:0;}
</style>