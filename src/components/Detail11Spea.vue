<template>
    <SubHeader />
    <div class="speakerDetail-area">
        <div class="speakerDetail-wrap">
            <div class="description-box">
                <p v-html="$store.state.description" class="description"></p>
                <h4 class="title">{{$store.state.schedule[$route.params.id].subject}}({{$store.state.schedule[$route.params.id].time}})</h4>
            </div>
            <div class="speakerDetail-box">
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
        this.$store.commit('find', this.$route.path);
    },
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.speakerDetail-area{
    padding: 3.5rem 1.66rem;
    background:#f9f9f9;
}

.speakerDetail-wrap{
    @include layout;
}

.description-box{
    border-top:1px solid #0e0e0e;
    .description{
        margin:0.8rem 0 0.3rem;
        padding: 1.2rem;
        background:#f1f1f1;
        color: #0e0e0e;
        
    }
    .title{
        @include lineTitleRev;
    }
}

.speakerDetail-box{
    @include flexDown;
    margin-top: 3rem;
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