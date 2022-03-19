<template>
    <div class="fnq-area">
        <div class="fnq-wrap">
            <div class="fnq-box">
                <ul class="fnq-list">
                    <li v-for="(qna, i) in this.qna" :key="i">
                        <span @click="toggle(i)" class="q" :class="{ active: this.slideUp[i] == true }">{{qna.question}}</span>
                        <transition name="accordion"
                            @before-enter="beforeEnter"
                            @enter="enter"
                            @before-leave="beforeLeave"
                        >
                            <span v-show="this.slideUp[i] == true" class="a" >{{qna.answer}}</span>
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
            slideUp : [],
            qna : [
                {
                    "id": "0",
                    "question" : "내 정보를 수정하고 싶어요. 어디서 해야 하나요?",
                    "answer" : "마이페이지에 접속 후 원하시는 항목을 클릭하여 수정하시면 됩니다"
                },
                {
                    "id": "1",
                    "question" : "프로그램은 유료인가요?",
                    "answer" : "각 프로그램 별 유/무료 참가 비용이 기재되어있습니다."
                },
                {
                    "id": "2",
                    "question" : "통역신청방법",
                    "answer" : "통역 지원 가능 여부 및 통역사 배정은 사무국에서 순차 안내드립니다."
                },
                {
                    "id": "3",
                    "question" : "영수증요청합니다",
                    "answer" : "운동장 이용방법 문의, 입금확인, 예약취소 및 사용료 반환 요청 등 운동장 이용에 관한 문의 및 답변 게시판입니다."
                },
                {
                    "id": "4",
                    "question" : "예약취소 요청드립니다.",
                    "answer" : "우리는 이와 같은 고객과의 약속을 반드시 지키기 위한 구체적인 이행표준을 마련하고, 이를 성실히 준수하겠습니다."
                },
                {
                    "id": "5",
                    "question" : "영수증요청합니다",
                    "answer" : "운동장 이용방법 문의, 입금확인, 예약취소 및 사용료 반환 요청 등 운동장 이용에 관한 문의 및 답변 게시판입니다."
                },
                {
                    "id": "6",
                    "question" : "예약취소 요청드립니다.",
                    "answer" : "우리는 이와 같은 고객과의 약속을 반드시 지키기 위한 구체적인 이행표준을 마련하고, 이를 성실히 준수하겠습니다."
                },
            ],
        }
    },
    mounted(){
        let array = [];
        this.qna.forEach(function(){
            array.push(false);
        })
        this.slideUp = [...array];

    },
    methods:{
        toggle(index){
            let openArr = this.slideUp.map(e => {
                e = false;
                return e;
            })
            if(this.slideUp[index] == false){
                this.slideUp = [...openArr];
                this.slideUp[index] = true;
            }else{
                this.slideUp = [...openArr];
            }
        },
        beforeEnter(el) {
            el.style.height = '0rem';
            el.style.opacity = '0';
            el.style.transitionProperty = 'all';
            el.style.transitionDuration = '0.6s';
        },
        enter(el, done) {
            setTimeout(()=>{
                el.style.height = '4rem';
                el.style.opacity = '1';
            }, 100);
            done();

        },
        beforeLeave(el) {
            el.style.height = '0rem';
            el.style.opacity = '0'; 
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
    border-top: 1px solid #0e0e0e;
    border-bottom: 1px solid #0e0e0e;
    li ~ li{
        border-top: 1px solid #D1D1D1;
    }
}

.fnq-list li{
    span{
        @include centerVertical;
        overflow: hidden;
        width:100%;
        height:4rem;
        padding: 0 1.8rem;
    }
    .q{
        position: relative;
        cursor:pointer;
        &:before{
            @include bef;
            left:auto;
            top: 50%;
            right:1.8rem;
            width:0.4rem;
            height:0.667rem;
            background: url('../assets/icon_arrow_gr.png') no-repeat center center/cover;
            transform: translateY(-50%) rotate(90deg);
        }
    }
    .q.active{
        &:before{
            transform: translateY(-50%) rotate(-90deg);
        }
    }
    .a{
        background:#f3f3f3;
    }
    
}



</style>