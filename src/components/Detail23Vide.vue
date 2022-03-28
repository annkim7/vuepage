<template>
    <SubHeader />
    <div class="videoDetail-area">
        <div class="videoDetail-wrap">
            <div class="videoDetail-box">
                <video muted autoplay controls :poster="$store.state.findArray.poster">
                    <source :src="$store.state.findArray.src" type="video/mp4">
                </video>
            </div>
            <div class="videoDetail-head">
                <h4 v-html="$store.state.title" class="title"></h4>
            </div>
            <p v-html="$store.state.description" class="description"></p>
        </div>
    </div>
</template>

<script>
import SubHeader from './SubHeader'

export default {
    name : 'Detail23Vide',
    components: {
        SubHeader,
    },
    data(){

    },
    mounted(){
        this.$store.commit('find', this.$route.path);
    },
    methods:{
    }
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.videoDetail-area{
    padding: 3.5rem 1.66rem;
    background:#f9f9f9;
}

.videoDetail-wrap{
    @include layout;
    .title{
        @include upTitle;
        margin:2rem 0 1rem;
    }
    .description{
        line-height: 1.3;
    }
}

.videoDetail-box{
    @include videoSrc;
    
}
</style>