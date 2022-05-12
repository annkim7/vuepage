<template>
    <div class="host-area">
        <div class="host-wrap">
            <div class="hostHead-box">
                <div class="host-inner">
                    <strong>첨단소재로 고객과 함께<br>성장해 나가겠습니다</strong>
                    <p>고객과 파트너사의 신뢰와 협력으로 지속적으로 성장했으며, 끊임없는 연구개발과 혁신으로 새로운 가치를 창조해 나가겠습니다.<br><br>자체 연구역량 강화와 관계기관과의 파트너십 및 User와의 네트워크를 통해 경쟁력 제고에 심혈을 기울이고 있습니다.</p>
                </div>
            </div>
            <div class="hostBg-box">
                <div class="host-bg">
                    <div class="host-img"><span></span></div>
                </div>
                
            </div>
            <div class="hostCon-box">
                <div class="host-inner">
                    <h4 class="title">추구 방향</h4>
                    <ul class="icon-list">
                        <li>혁신성</li>
                        <li>친환경</li>
                        <li>종합 기술력</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name : 'Detail01',
    data(){
        return{
            scrollTop : 0,
        }
    },
    mounted(){
        document.addEventListener('scroll', this.scroll, true);
    },
    unmounted(){
        document.removeEventListener('scroll', this.scroll, true);
    },
    methods:{
        scroll(e){
        this.scrollTop = e.target.scrollTop;

        console.log('scroll', this.scrollTop);

        },
    }
}
</script>

<style lang="scss">
@import '../assets/style/root.scss';

.wrap.scrollBg,
.wrap.scrollBg .sub-container{
    background: transparent;
}

.wrap.scrollBg .header-wrap,
.wrap.scrollBg .subHeader-wrap{
    background: var(--default-bg);
}

.wrap.scrollBg .subHeader-wrap{
    max-width:100%;
    margin: 0;
    margin-top:60px;
}

.wrap.scrollBg .subHeader-box{
    @include layout;
}

.wrap.scrollBg .sub-container{
    padding:0;
}

.host-area{
    overflow:hidden;
}

.host-inner{
    @include layout;
    padding: 3.5rem 0;
}


.hostHead-box,
.hostCon-box{
    background: #f9f9f9;
}

.hostHead-box .host-inner{
    display:flex;
    strong{
        position:relative;
        width:29%;
        max-height:7.6rem;
        margin-right:16%;
        padding:1.8rem;
        font-size:1.6rem;
        line-height:1.3;
        color:#0e0e0e;
        &:before, &:after{
            display:block;
            position:absolute;
            top:1.5rem;
            left:0.2rem;
            content: "\f10d";
            font-size:1.2rem;
            font-family:"fontAwesome";
        }
        &:after{
            top:auto;
            bottom:1.5rem;
            left:auto;
            right:1.8rem;
            content: "\f10e";
        }
    }
    p{
        width:55%;
        padding-top:1.8rem;
        font-size:1.05rem;
        line-height:1.4;
    }
}

.hostBg-box{
    overflow:hidden;
    position:relative;
    height: 33rem;
    
}

.host-bg{
    overflow: hidden;
    position: fixed;
    width: auto;
    height: 100vh;
    left: 0;
    right: 0;
    top: 0;
    z-index: -1;
}

.host-img{
    position:relative;
    width:100%;
    height:100%;
    span{
        display:block;
        position:absolute;
        width:100%;
        height:100%;
        transform: translate(-5%, -5%) scale(1.1);
        &:after{
            overflow:hidden;
            display: block;
            position: absolute;
            width: auto;
            height: 100%;
            content: '';
            left: 0;
            right: 0;
            background: url('../assets/host.jpg') no-repeat center center/cover;
        }
    }
}

.hostCon-box{
    height:100vh;
    .host-inner{
        .title{
            @include upTitle;
            
        }
    }
    
}

.icon-list{
    @include center;
    li{
        position: relative;
        width:10rem;
        margin: 2.6rem;
        padding-top:12rem;
        font-size:1.05rem;
        color:#0e0e0e;
        text-align: center;        
        &:before{
            @include bef;
            width:10rem;
            height:10rem;
            left:50%;
            transform: translate(-50%, 0);
            border-radius: 50%;
            background: #f4f4f4 url('../assets/icon_01.png') no-repeat center center/4rem 4rem;
        }
        
    }
    @for $i from 1 to 4{
        li:nth-of-type(#{$i}){
            &:before{
                background-image: url('../assets/icon_0#{$i}.png');
            }
            
        }
    }    
}

</style>