<template>
    <div class="schedule-area">
        <span class="schedule-visual"><img src="../assets/schedule.png"/></span>
        <div class="schedule-wrap">
            <div class="schedule-header">
                <h4 class="date">12.25 <strong>Wed</strong></h4>
            </div>
            <div class="schedule-box">
                <div class="date">
                    <span>Abstract <strong>Seminar</strong></span>
                    <span>Press <strong>Seminar</strong></span>
                </div>
                <div class="break"><b>09:00 ~ 10:00</b> 접수 및 자료 배포</div>
                <ul class="schedule-list">
                    <li v-for="(schedule, i) in amArr" :key="i" @click="$store.commit('modal', schedule.id)">
                        <span class="img"><img :src="schedule.img"/></span>
                        <div class="con">
                            <span class="time">{{schedule.time}}</span>
                            <h5 class="subject">{{schedule.subject}}</h5>
                            <div class="belong">
                                <span>{{schedule.name}}</span>
                                <span>{{schedule.company}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="break"><b>12:00 ~ 13:00</b> 점심</div>
                <ul class="schedule-list double">
                    <li v-for="(schedule, i) in pmArr" :key="i" @click="$store.commit('modal', schedule.id)">
                        <span class="img"><img :src="schedule.img"/></span>
                        <div class="con">
                            <span class="time">{{schedule.time}}</span>
                            <h5 class="subject">{{schedule.subject}}</h5>
                            <div class="belong">
                                <span>{{schedule.name}}</span>
                                <span>{{schedule.company}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>

    <div class="modal-area" v-if="$store.state.isOpen == true">
        <div class="modal-wrap">
            <span @click="$store.commit('modalClose')" class="close-btn"><font-awesome-icon :icon="['fa', 'times']" /></span>
            <div class="modal-header">
                <span class="time">{{$store.state.schedule[$store.state.moId].time}}</span>
                <h4 class="title">{{$store.state.schedule[$store.state.moId].subject}}</h4>
                <span class="name">{{$store.state.schedule[$store.state.moId].name}}</span>
                <span class="company">({{$store.state.schedule[$store.state.moId].company}})</span>
            </div>
            <div v-html="$store.state.description" class="modal-content"></div>
        </div>
        
        
    </div>
</template>

<script>
export default {
    name : 'Detail10',
    data(){
        return{
            amArr : {},
            pmArr : {},
        }
    },
    mounted(){
        this.schedule();
    },
    methods:{   
        schedule(){
            let scheduleOriginal = [...this.$store.state.schedule];
            this.amArr = scheduleOriginal.filter((a)=>{ return a.time.substr(0,2) < 12; });
            this.pmArr = scheduleOriginal.filter(b => !this.amArr.includes(b));
        }
    }
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.schedule-area{
    @include layout;
    
}

.schedule-header{
    @include center;
    
}

.date{
    display:flex;
    position:relative;
    margin: 2rem 0;
    padding-top:1rem;
    font-family: 'Pretendard-Regular';
    font-size: 2rem;
    font-weight: 900;
    color: #0e0e0e;
    text-align: center;
    letter-spacing: -0.08rem;
    &:before{
        display:block;
        position:absolute;
        width:100%;
        height:3px;
        top:0;
        left:0;
        background: #dedede;
        content:'';
    }
    strong{
        margin-left:0.5rem;
        font-weight:100;
    }
}

.schedule-box{
    border-top: 1px solid #0e0e0e;
    .date{
        font-size: 1.6rem;
        margin: 1rem 0;
        padding-top:0;
        &:before{
            display:none;
        }
        span{
            @include center;
            width:50%;
        }
    }
    .break{
        @include center;
        padding: 1.3rem 0;
        background: repeating-linear-gradient(45deg, #f4f4f4, #f4f4f4 1px, #d1d1d1 0, #d1d1d1 8px);
        color:#0e0e0e;
        font-weight:600;
        b{
            margin-right: 0.5rem;
            color: #fff;
        }
    }
}

.schedule-list{
    display:flex;
    flex-flow: row wrap;
}

.schedule-list li{
    display:flex;
    align-items: center;
    width:100%;
    padding: 1.66rem;
    cursor:pointer;
    .img{
        width:10rem;
    }
    .con{
        width:calc(100% - 10rem);
        padding-left: 1.66rem;
        .time{
            font-size:0.95rem;
            font-weight: 600;
        }
        .subject{
            margin: 1rem 0;
            font-size: 1.5rem;
            font-weight: 600;
            color: #0e0e0e;            
        }
    }
}

.schedule-list li .belong{
    @include befBar(#d1d1d1);
    font-size:0.95rem;
}

.schedule-list li ~ li{
    border-top: 1px solid #0e0e0e;
}

.schedule-list.double{
    li ~ li{
        border-top:0;
    }
    li{
        width:auto;
        min-width: 50%;
        flex: 1 0 0;
        &:nth-of-type(n+3){
            border-top: 1px solid #0e0e0e;
        }
        &:nth-of-type(2n){
            width:50%;
        }
    }
    
    
}

.modal-area{
    @include dim;
}

.modal-wrap{
    @include centerPos;
    position:relative;
    width: 40rem;
    padding: 1.66rem;
    background: #fff;
    .close-btn{
        position:absolute;
        top:0;
        right:0;
        cursor:pointer;
        svg{
            width:1.5rem;
            height:1.5rem;
            margin:0.5rem;
        }
    }
}

.modal-header{
    display:flex;
    flex-flow: row wrap;
    align-items: baseline;
    justify-content: space-between;
    border-bottom: 1px solid #d4d4d4;
    span{
        font-size: 0.85rem;
        color:#d1d1d1;
    }
    .time{
        width:100%;
    }
    .title{
        margin: 0.5rem 0 0.6rem;
        margin-right:auto;
        font-size: 1.5rem;
        font-weight: 600;
        color: #0e0e0e;
    }
}

.modal-content{
    padding: 1.2rem 0;
    font-size:0.95rem;
    line-height:1.3;
    white-space: pre-line;
}

</style>