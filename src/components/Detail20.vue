<template>
    <div class="exhibition-area">
        <div class="exhibition-wrap">
            <div class="select-box">
                <div class="select">
                    <span @click="$store.commit('toggleList')" class="select-btn">
                        {{$store.state.value ? $store.state.value : 'category'}}
                    </span>
                    <ul v-show="$store.state.isActive" class="select-list">
                        <li v-for="(cate, i) in cateArr" :key="i" @click="$store.commit('setValue', cate); select(cate);">
                            {{cate}}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="return-box">
                <span @click="undo()" class="return-btn"><font-awesome-icon :icon="['fa', 'undo']" /></span>
            </div>
            <div class="search-box">
                <form name="search">
                    <input @input="text = $event.target.value" type="text" name="search-input" placeholder="업체명" />
                    <span @click="search(this.text)" class="search-btn">
                        <font-awesome-icon :icon="['fa', 'search']" />
                    </span>
                </form>
            </div>
            <div class="item-box">
                <ul v-if="searchArr != ''" class="item-list">
                    <li v-for="(item, i) in searchArr" :key="i" class="item" >
                        <div class="image">
                            <router-link :to="{ path: `/detail/20/` + item.id }">
                                <span class="img"><img :src="item.img"/></span>
                            </router-link>
                        </div>
                        <div class="summary">
                            <strong class="title">{{item.title}}</strong>
                            <span @click="$store.commit('like', item.id)" class="like">
                                <em class="heart" :class="{ active: item.click == true }"></em>
                                <i class="count">{{item.like}}</i>
                            </span>
                            <p class="text">{{item.text}}</p>
                        </div>
                    </li>
                </ul>
                <div v-if="searchArr == ''" class="noResult">
                    no result
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

export default {
    name : 'Detail20',
    data(){
        return {
            text : "",
        }
    },
    setup(){
        let store = useStore();

        let searchArr = ref([]);
        let searchOriginal = ref([]);

        let cateArr = ref([]);
        
        onMounted(()=>{
            searchArr.value = store.state.item;
            searchOriginal.value = [...store.state.item]

            let category = store.state.item.map(a => a.category);
            cateArr.value = new Set(category);
        });

        function search(text){
            let searchTxt = searchOriginal.value.filter((b)=>{
                return b.title.indexOf(text) != -1
            });
            searchArr.value = [...searchTxt]
        }

        function select(cate){
            let selectTxt = searchOriginal.value.filter((c)=>{
                return c.category.indexOf(cate) != -1
            });
            searchArr.value = [...selectTxt]
        }
        
        function undo(){
            searchArr.value = store.state.item;
            store.state.value = null;
        }

        return { searchArr, cateArr, search, select, undo }
    },
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.exhibition-area{
    @include layout;
}

.exhibition-wrap{
    display:flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
}

.item-box{
    width:100%;
    margin-top: 2.5rem;
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
    background: var(--white);
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
    width: 30%;
    margin-left: auto;
    form{
        @include search(2.5rem, 2.3rem);
        width:100%;
        font-size: 0.85rem;
        input{
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem; 
            &::placeholder{
                font-size:0.8rem;
                color: var(--default-color);
            }
        }
        span{
            background: var(--white);
            font-size: 0.85rem;
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
        }
    }
}

.select-box{
    position:relative;
    width: 25%;
    .select-btn{
        @include centerVertical;
        width:100%;
        height: 2.5rem;
        padding: 0.2rem 1.4rem 0.2rem 0.8rem;
        background: url('https://design-science.or.kr/app/dubu_subcontent/docs/imgs/1586411111_arrow.png') no-repeat 95% 50% #fff;
        background-size: 0.65rem 0.65rem;
        border-radius: 0.5rem;
        font-size:0.9rem;
        color: var(--default-color);
        cursor:pointer;
    }
    .select-list{
        position:absolute;
        width:100%;
        top: 2.3rem;
        left:0;
        z-index:2;
        li{
            @include centerVertical;
            height: 2.5rem;
            padding: 0.2rem 0.8rem;
            background-color: var(--white);
            cursor:pointer;
            &:hover{
                background-color: #ccc;
            }
        }
    }
}

.return-box{
    width:4%;
    margin-left: 0.2rem;
    .return-btn{
        @include center;
        width: 2.5rem;
        height: 2.5rem;
        background-color: var(--white);
        border-radius: 0.5rem;
        font-size: 0.85rem;
        cursor:pointer;
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