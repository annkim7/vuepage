<template>
    <div class="fnq-area">
        <div class="fnq-wrap">
            <div class="fnq-box">
                <ul class="fnq-list">
                    <li>
                        <span @click="toggle()" class="q">질문있어요</span>
                        <transition name="accordion"
                            @before-enter="beforeEnter"
                            @enter="enter"
                            @before-leave="beforeLeave"
                        >
                            <span v-show="slideUp" class="a" >답해주세요</span>
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
        beforeEnter(el) {
            el.style.height = '0rem';
            el.style.transitionProperty = 'all';
            el.style.transitionDuration = '1s';
        },
        enter(el, done) {
            setTimeout(()=>{
                el.style.height = '5rem';
            }, 100);
            done();

        },
        beforeLeave(el) {
            el.style.height = '0rem'; 
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
            height:5rem;
            background:#f4f4f4;
        }
        .a{
            background:#ddd;
        }
    }
}


// .accordion-enter-from{ opacity:0; }
// .accordion-enter-active{ transition: all 0.8s;}
// .accordion-enter-to{opacity:1;}

// .accordion-leave-from{ opacity:1;}
// .accordion-leave-active{ transition: all 0.8s;}
// .accordion-leave-to{opacity:0;}


</style>