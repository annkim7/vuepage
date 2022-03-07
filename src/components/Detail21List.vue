<template>
    <SubHeader />
    <div class="noticeDetail-area">
        <div class="noticeDetail-wrap">
            <div class="noticeDetail-box">
                <h4 class="title">{{$store.state.findData.title}}</h4>
                <div class="quote">
                    <span class="img"><img :src="$store.state.findData.img"/></span>
                    <blockquote>{{$store.state.findData.summary}}</blockquote>
                </div>
                <p v-html="$store.state.description" class="description"></p>
            </div>
        </div>
    </div>
    
</template>

<script>
import SubHeader from './SubHeader'

export default {
    name : 'Detail21List',
    components: {
        SubHeader,
    },
    data(){

    },
    mounted(){
        this.$store.commit('find', this.$route.path);
        this.$store.commit('lineBreak', this.$route.path);
    },
    methods:{
    }
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.noticeDetail-area{
    padding: 3.5rem 1.66rem;
    background:#f9f9f9;
}

.noticeDetail-box{
    @include layout;
    .title{
        @include upTitle;
    }
    .quote{
        margin: 2rem 0 2.5rem;
        padding: 2rem 2rem 1.5rem;
        background: #f3f3f3;
        blockquote{
            @include lineTitleRev;
            margin-top:1.6rem;
            font-style: italic;
            line-height:1.2;
        }
    }
    .description{
        line-height:1.3;
    }
}
</style>