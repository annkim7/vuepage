<template>
    <SubHeader />
    <div class="noticeDetail-area">
        <div class="noticeDetail-wrap">
            <div class="noticeDetail-box">
                {{this.$route.path}}
                
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
    },
    methods:{
        // findTitle(number){
        //     let title = this.$store.state.notice.find(x => x.id === number).title;
        //     return title;
        // }
    }
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.noticeDetail-area{
    padding: 3.5rem 0 0;
    background:#f9f9f9;
}

.noticeDetail-box{
    @include layout;
}
</style>