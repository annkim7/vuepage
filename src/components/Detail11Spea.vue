<template>
    <SubHeader />
    <div class="speakerDetail-area">
        <div class="speakerDetail-wrap">
            <div class="speakerDetail-box">
                <div v-html="$store.state.description" class="test"></div>
                <h4 class="title">{{$store.state.schedule[$route.params.id].name}}</h4>
                <div class="img"><img :src="$store.state.schedule[$route.params.id].img"/></div>
                <div class="record">
                    <ul class="list">
                        <li v-for="(record, i) in $store.state.schedule[$route.params.id].record" :key="i">
                            <b v-if="record.year != ''">{{record.year}}</b><span>{{record.content}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script>
import SubHeader from './SubHeader'

export default {
    name : 'Detail11Spea',
    components: {
        SubHeader,
    },
    mounted(){
        this.$store.commit('lineBreak', this.$route.params.id)
    },
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.speakerDetail-area{
    padding: 3.5rem 0 0;
    background:#f9f9f9;
}

.speakerDetail-wrap{
    @include layout;
}

.speakerDetail-box{
    @include flexDown;
    align-items: center;
    .title{
        @include upTitle;
        width:100%;
        margin: 0 0 1rem;
    }
    .img{
        width:30%;
    }
    
}

.record{
    @include list(auto);
    width:70%;
    padding-left:3rem;
    .list li{
        b{
            padding-right:1rem;
        }
    }
}
</style>