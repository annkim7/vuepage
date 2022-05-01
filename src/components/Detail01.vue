<template>
    <div class="host-area">
        <div class="host-wrap">
            <div class="hostHead-box">
                <div class="host-inner">안녕하십니까, 세미나에 오신 것을 환영합니다.</div>
            </div>
            <div class="hostBg-box">
                <div class="host-bg">
                    <div class="host-img"><span></span></div>
                </div>
                
            </div>
            <div class="hostCon-box">
                <div class="inner">
                    <h4 class="title">추구 방향</h4>
                    <ul class="icon-list">
                        <li><span></span></li>
                        <li><span></span></li>
                        <li><span></span></li>
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

        }
    },
    mounted(){

    },
    methods:{

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
    .inner{
        @include layout;
        padding-top:4rem;
        .title{
            @include upTitle;
            
        }
    }
    
}

.icon-list{
    @include center;
    li{
        margin: 2.6rem;
        padding: 3rem;
        background: #f4f4f4;
        border-radius: 50%;
        span{
            width:4rem;
            height:4rem;
            background: url('../assets/icon_01.png') no-repeat center center/cover;
        }
        
    }
    @for $i from 1 to 4{
        li:nth-of-type(#{$i}) span{
            background-image: url('../assets/icon_0#{$i}.png');
        }
    }    
}

</style>