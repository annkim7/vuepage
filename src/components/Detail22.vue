<template>
    <div class="fnq-area">
        <div class="fnq-wrap">
            <div class="fnq-box">
                <ul class="fnq-list">
                    <li v-for="(qna, i) in this.qna" :key="i">
                        <span @click="toggle(qna.id)" class="q">{{qna.question}}</span>
                        <transition name="accordion"
                            @before-enter="beforeEnter"
                            @enter="enter"
                            @before-leave="beforeLeave"
                        >
                            <span v-show="slideUp" class="a" >{{qna.answer}}</span>
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
            // slideUp : false,
            slideNum : 0,
            qna : [
                {"id": "0", "question" : "질문있어요", "answer" : "답해주세요", "slideUp" : false},
                {"id": "1", "question" : "질문있어요1", "answer" : "답해주세요1", "slideUp" : false},
                {"id": "2", "question" : "질문있어요2", "answer" : "답해주세요2", "slideUp" : false},
                {"id": "3", "question" : "질문있어요3", "answer" : "답해주세요3", "slideUp" : false},
                {"id": "4", "question" : "질문있어요4", "answer" : "답해주세요4", "slideUp" : false},
            ],
        }
    },
    mounted(){

    },
    methods:{
        toggle(id){
            
            this.slideNum = id;

            if(this.slideNum == '0'){
                this.qna[0].slideUp = !this.qna[0].slideUp;
            }
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