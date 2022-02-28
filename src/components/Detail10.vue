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
                    <li v-for="(schedule, i) in amArr" :key="i">
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
                    <li v-for="(schedule, i) in pmArr" :key="i">
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
            this.amArr = scheduleOriginal.slice(0,2);
            this.pmArr = scheduleOriginal.slice(2,6);
            console.log(this.amArr);
            console.log(this.pmArr);
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
    li{
        width:50%;
        &:nth-of-type(n+3){
            border-top: 1px solid #0e0e0e;
        }
    }
    li ~ li{
        border-top:0;
    }
}
</style>