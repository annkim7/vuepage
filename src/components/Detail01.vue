<template>
    <div class="host-area">
        <div class="host-wrap">
            <div class="host-box">
                <div class="host-img"><span></span></div>
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

.host-area{
    @include layout;
}

.host-wrap{
    overflow:hidden;
    position:relative;
    height: 18rem;
    border:1px solid red;
    
}

.host-box{
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
        &:after{
            overflow:hidden;
            display: block;
            position: absolute;
            width: auto;
            height: 100%;
            content: '';
            left: 0;
            right: 0;
            background: url('../assets/host.jpg') no-repeat center;
        }
    }
}

</style>