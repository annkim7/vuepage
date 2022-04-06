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
                <div class="host-inner">text</div>
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
    height: 18rem;
    
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
}

</style>