<template>
    <SubHeader />
    <div class="speakerDetail-area">
        <div class="speakerDetail-wrap">
            <div class="speakerDetail-box">
                <h4 class="title">{{$store.state.schedule[$route.params.id].name}}</h4>
                <div class="img"><img :src="$store.state.schedule[$route.params.id].img"/></div>
                <div class="history"></div>
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
    }
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
    .title{
        @include upTitle;
        width:100%;
        margin: 0 0 1rem;
    }
    .img{
        width:30%;
    }
    .history{
        width:70%;
    }
}

</style>