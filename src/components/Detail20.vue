<template>
    <div class="exhibition-area">
        <div class="exhibition-wrap">
            <div class="search-box">
                <form name="search">
                    <input type="text" name="search-input" placeholder="업체명" @input="write($event.target.value)" />
                    <span @click="search()"  class="search-btn"><font-awesome-icon :icon="['fa', 'search']" /></span>
                </form>
            </div>
            <div class="item-box">
                <ul class="item-list">
                        <li v-for="(item, i) in $store.state.item" :key="i" class="item" >
                            <div class="image">
                                <router-link :to="{ path: `/detail/20/` + i }">
                                    <span class="img"><img :src="item.img"/></span>
                                </router-link>
                            </div>
                            <div class="summary">
                                <strong class="title">{{item.title}}</strong>
                                <span @click="$store.commit('like', $store.state.id=i)" class="like">
                                    <em class="heart" :class="{ active: item.click == true }"></em>
                                    <i class="count">{{item.like}}</i>
                                </span>
                                <p class="text">{{item.text}}</p>
                            </div>
                        </li>
                        <!-- <li v-for="(item, i) in searchArr" :key="i" class="item" >
                            <div class="image">
                                <router-link :to="{ path: `/detail/20/` + i }">
                                    <span class="img"><img :src="item.img"/></span>
                                </router-link>
                            </div>
                            <div class="summary">
                                <strong class="title">{{item.title}}</strong>
                                <span @click="$store.commit('like', $store.state.id=i)" class="like">
                                    <em class="heart" :class="{ active: item.click == true }"></em>
                                    <i class="count">{{item.like}}</i>
                                </span>
                                <p class="text">{{item.text}}</p>
                            </div>
                        </li> -->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import axios from 'axios';
// import { useStore } from 'vuex'

export default {
    name : 'Detail20',
    setup(){
        let searchArr = ref([]);
        let searchOriginal = ref([]);

        // let store = useStore();
        onMounted(()=>{
            axios.get('https://annkim7.github.io/vuepage/src/assets/data/itemList.json').then((b)=>{
                searchArr.value = b.data;
                searchOriginal.value = [...b.data];
            })
        });

        function search(text){
            console.log(text);
            let searchTxt = searchOriginal.value.filter((b)=>{
                return b.title.indexOf(text) != -1
            });
            searchArr.value = [...searchTxt]
            console.log(search.value);
        }
        
        return { searchArr, search }
    },
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.exhibition-area{
    @include layout;
}

.item-list{
    @include gallary(2rem,3);
    li{
        border: 1px solid var(--default-color);
    }
    .image{
        @include imgFull;
    }
}

.summary{
    display:flex;
    padding: 0.4rem 1.2rem 1.2rem;
    flex-flow: row wrap;
    align-items: center;
    border-top: 1px solid var(--default-color);
    .title{
        @include ellipse;
        flex: 1 1 0;
        font-weight: 900;
    }
    .like{
        display:flex;
        position:relative;
        align-items: center;
        flex-shrink: 0;
        font-size: 0.9rem;
        cursor: pointer;
        .count{
            @include centerTop;
            right: 0.2rem;
        }
    }
    .text{
        @include ellipseBox(2rem,2);
        width:100%;
    }
}

.heart {
    width: 3.125rem;
    height: 3.125rem;
    background: url("../assets/heart.png") no-repeat;
    background-position: 0 0;
    cursor: pointer;
    transition: background-position 1s steps(28);
    transition-duration: 0s;
    &.active {
        transition-duration: 1s;
        background-position: -87.5rem 0;
    }
}

.search-box{
    display:flex;
    margin-bottom: 2.5rem;
    align-items: center;
    justify-content: flex-end;
    form[name=search]{
        display:flex;
        width: 30%;
        height: 2.3rem;
        font-size: 0.85rem;
        input{
            width: calc(100% - 2.5rem);
            height: 100%;
            padding: 0 0.7rem;
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem; 
        }
        .search-btn{
            @include center;
            width:2.3rem;
            height: 100%;
            margin-left: 0.2rem;
            background: var(--white);
            font-size: 0.85rem;
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
            cursor:pointer; 
        }
    }
}


@include tablet{
    .item-list{
        @include gallary(2rem,2);
    }
}

@include mobile{
    .item-list{
        @include gallary(2rem,1);
    }
}

</style>