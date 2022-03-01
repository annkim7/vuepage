<template>
    <div class="speaker-area">
        <div class="speaker-wrap">
            <div class="speaker-box">
                <ul class="speaker-list">
                    <li v-for="(speaker, i) in sideArr" :key="i" :style="{backgroundImage:`url(${speaker.img})`}">
                        <router-link :to="{ path: `/detail/11/` + speaker.id }" v-if="speaker.id != undefined"></router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Detail11',
    data(){
        return{
            sideArr : {},
        }
    },
    mounted(){
        this.side();
    },
    methods:{   
        side(){
            this.sideArr = [...this.$store.state.schedule];

            const arr = Array.from({length: 7}, () => 1);

            let newArr = [];
            for (var i = 1; i < 10; i++) {
                newArr.push(arr);
            }

            this.sideArr.push(...newArr);
        }
    }
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.speaker-area{
    @include layout;
}

@for $i from 1 through 16{
    $idx : ($i % 9);

    .speaker-list li:nth-of-type(#{$i}){
        order: $idx;
    }
}

.speaker-list{
    @include center;
    flex-flow: row wrap;
    li{
        width:25%;
        height: 20rem;
        background: url('../assets/person0.jpg') no-repeat center center/cover;
        order:1;
        &:nth-of-type(n+8){
            background-color: #f4f4f4;
            background-image: none;
            background-image: radial-gradient(closest-side, transparent 98%, #d1d1d1 100%), radial-gradient(closest-side, transparent 98%, #d1d1d1 100%) ! important;
            background-position: 0 0, 15px 15px;
            background-size: 30px 30px;
            background-repeat: repeat;
            
        }
        &:nth-of-type(16){
            background-image: none ! important;
            background-color: #0e0e0e;
        }
        &:nth-of-type(3){
            order:2;
        }
        &:nth-of-type(12){
            order:4;
        }
        &:nth-of-type(15){
            order:7;
        }
        a{
            width:100%;
            height:100%;
        }
    }
}



</style>