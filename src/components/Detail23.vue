<template>
    <div class="video-area">
        <div class="video-wrap">
            <div class="select-box">
                <div class="select">
                    <span @click="$store.commit('toggleList')" class="select-btn">
                        {{$store.state.value ? $store.state.value : 'search'}}
                    </span>
                    <ul v-show="$store.state.isActive" class="select-list">
                        <li v-for="(cate, i) in cateArr" :key="i" @click="$store.commit('setValue', cate); select(cate);">
                            {{cate}}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="search-box">
                <form name="search">
                    <input @input="text = $event.target.value" type="text" name="search-input" placeholder="검색" />
                    <span @click="search(this.text)" class="search-btn">
                        <font-awesome-icon :icon="['fa', 'search']" />
                    </span>
                </form>
            </div>
            <div class="video-box">
                <ul class="video-list">
                    <li v-for="(video, i) in pageArr" :key="i">
                        <router-link :to="{ path: `/detail/23/` + video.id }">
                            <span class="image"><img :src="video.poster"/></span>
                            <strong class="title">{{video.title}}</strong>
                        </router-link> 
                    </li>
                </ul>
                <div v-if="pageArr == ''" class="noResult">
                    no result
                </div>
            </div>
            <div class="page-box">
                <span v-if="pageSetting(total, limit, block, page).first != null" class="prev-btn">
                    <font-awesome-icon :icon="['fa', 'angle-double-left']" />
                </span>
                <ul class="page-list">
                    <li v-for="(page, i) in pageSetting(total, limit, block, page).list" :key="i" @click="paging(page)">
                        {{page}}
                    </li>
                </ul>
                <span v-if="pageSetting(total, limit, block, page).end != null"  class="next-btn">
                    <font-awesome-icon :icon="['fa', 'angle-double-right']" />
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, reactive, toRefs, computed } from 'vue'
import { useStore } from 'vuex'

export default {
    name : 'Detail23',
    setup(){
        let store = useStore();

        let searchArr = ref([]);
        let searchOriginal = ref([]);

        let cateArr = ref([]);

        let pageArr = ref([]);

        let indexArr = ref([]);
        
        let data = reactive({
            limit : 6,
            block : 5,
            page : 1,
            category : '',
        });

        let total = computed(()=>{
            return searchArr.value.length;
        })

        
        onMounted(()=>{
            searchArr.value = store.state.video;
            searchOriginal.value = [...store.state.video]
            
            cateArr.value = ['제목', '내용'];
            
            order();
            
        });

        function order(){
            let sortTxt = searchArr.value.sort(function(a,b){
                return new Date(b.time) - new Date(a.time);
            });
            searchArr.value = [...sortTxt]
            
            paging(data.page);
            index();
        }

        function index(){
            indexArr.value.length = 0;
            for(var i = searchArr.value.length; i>0; i--){
                indexArr.value.push(i);
            }
        }
        
        function line(content){
            let bef = JSON.stringify(content);
            return bef.replace (/"/g,'');
        }

        function select(cate){
            data.category = (cate == '제목') ? 'title' : 'content';
        }

        function search(text){
            let searchTxt = {}
            if(data.category == 'content'){
                searchTxt = searchOriginal.value.filter((c)=>{
                    return c.content.indexOf(text) != -1
                });
            }else{
                searchTxt = searchOriginal.value.filter((c)=>{
                    return c.title.indexOf(text) != -1
                });
            }
            searchArr.value = [...searchTxt]
            order();
        }

        function paging(page){
            let pageList = searchArr.value.slice(
                (page - 1) * data.limit,
                page * data.limit
            )
            
            pageArr.value = pageList
            data.page = page

            pageSetting(total, data.limit, data.block, page)
        }

        function pageSetting(total, limit, block, page){
            const totalPage = Math.ceil(total / limit)
            let currentPage = page
            const first =
                currentPage > 1 ? parseInt(currentPage, 10) - parseInt(1, 10) : null
            const end =
                totalPage !== currentPage
                ? parseInt(currentPage, 10) + parseInt(1, 10)
                : null
    
            let startIndex = (Math.ceil(currentPage / block) - 1) * block + 1
            let endIndex =
                startIndex + block > totalPage ? totalPage : startIndex + block - 1
            let list = []
            for (let index = startIndex; index <= endIndex; index++) {
                list.push(index)
            }
            return { first, end, list, currentPage }
            
        }

        return {
            ...toRefs(data),
            total,
            cateArr, searchArr, pageArr, indexArr,
            order, index, line, paging, pageSetting, search, select
        }
    },
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.video-area{
    @include layout;
}

.video-wrap{
    display:flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-end;
    .select-box{
        min-width:9rem;
    }
    .search-box{
        margin-left:0.5rem;
    }
    .video-box{
        width:100%;
        margin-top:2.5rem;
        padding-left:0;
    }
}

.video-list{
    @include gallary(2rem,3);
    li{
        .title{
            @include ellipse;
            margin-top:0.8rem;
        }
    }
}

</style>