<template>
    <div class="video-area">
        <div class="video-wrap">
            <div class="filter-box">
                <span @click="$store.commit('pop')" class="filter-btn"><font-awesome-icon :icon="['fas', 'bars']" /></span>
                <div v-if="$store.state.pop" class="filter">
                    <ul class="filter-list">
                        <li v-for="(country, i) in countryArr" :key="i">
                            <input v-model="filterArr" type="checkbox" :id="`checkA`+i" :value="country">
                            <label @click="filter(country, i)" :for="`checkA`+i">{{country}}</label>
                        </li>
                    </ul>
                    <ul class="filter-list">
                        <li v-for="(classify, i) in classifyArr" :key="i">
                            <input v-model="filterArr" type="checkbox" :id="`checkB`+i" :value="classify">
                            <label @click="filter(classify, i)" :for="`checkB`+i">{{classify}}</label>
                        </li>
                    </ul>
                    <ul class="filter-list">
                        <li v-for="(activity, i) in activityArr" :key="i">
                            <input v-model="filterArr" type="checkbox" :id="`checkC`+i" :value="activity">
                            <label @click="filter(activity, i)" :for="`checkC`+i">{{activity}}</label>
                        </li>
                    </ul>
                </div>
            </div>
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

        let filterArr = ref([]);

        let beforeArr = ref([]);

        let countryArr = ref([]);
        let classifyArr = ref([]);
        let activityArr = ref([]);

        let checkedArr = ref([]);
        
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
            check();
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

        function check(){
            let countryTxt = searchOriginal.value.map((d)=>{
                return d.tag[0]
            });
            let setCountry = new Set(countryTxt)
            countryArr.value = [...setCountry]

            let classifyTxt = searchOriginal.value.map((d)=>{
                return d.tag[1]
            });
            let setClassify = new Set(classifyTxt)
            classifyArr.value = [...setClassify]

            let activityTxt = searchOriginal.value.map((d)=>{
                return d.tag[2]
            });
            let setActivity = new Set(activityTxt)
            activityArr.value = [...setActivity]

            let total = [...setCountry, ...setClassify, ...setActivity]

            checkedArr.value = total.map(e => {
                e = false;
                return e;
            });
        }

        function filter(text, index){
            beforeArr.value.length = 0;
            for(var i = 0; i<filterArr.value.length; i++){
                let beforeTxt = searchOriginal.value.filter((d)=>{
                    return d.tag.indexOf(filterArr.value[i]) != -1
                });
                beforeArr.value.push(...beforeTxt);
            }
            let befTxt = beforeArr.value;

            let filterTxt = searchOriginal.value.filter((d)=>{
                return d.tag.indexOf(text) != -1
            });
            
            let array = {}

            if(checkedArr.value[index] == false){
                checkedArr.value[index] = !checkedArr.value[index];
                array = [...befTxt, ...filterTxt];
                console.log('+'+index);
                console.log(array);
            }else{
                checkedArr.value[index] = !checkedArr.value[index];
                let befoTxt = beforeArr.value.filter((d)=>{
                    return d.tag.indexOf(text) == -1
                });
                array = [...befoTxt];
                console.log('-'+index);
                console.log(array);
            }
            
            let setting = new Set(array)
            searchArr.value = [...setting];
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
            cateArr, searchArr, pageArr, indexArr, countryArr, classifyArr, activityArr, filterArr, beforeArr, checkedArr,
            order, index, line, paging, pageSetting, search, select, check, filter
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
    position:relative;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-end;
    .filter-box{
        .filter-btn{
            @include center;
            width: 2.5rem;
            height: 2.5rem;
            background-color: var(--white);
            border-radius: 0.5rem;
            font-size: 0.85rem;
            cursor:pointer;
            box-shadow: 0 1px 4px 0 rgb(0 0 0 / 6%);
        }
    }
    .select-box{
        min-width:9rem;
        margin-left:auto;
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


.filter{
    position:absolute;
    display:flex;
    width:100%;
    height:10rem;
    padding: 1.5rem 0;
    top:3rem;
    left:0;
    justify-content: space-between;
    background-color: var(--white);
    border-radius: 0.5rem;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 6%);
    .filter-list{
        @include check;
        width:33.33%;
        padding-left:1rem;
        border-left:1px dashed #ccc;
    }
    .filter-list:first-child{
        border-left:0;
    }
}


.video-list{
    @include gallary(2rem,3);
    li{
        border:1px solid #f4f4f4;
        background:#fff;
        box-shadow: 0 1px 4px 0 rgb(0 0 0 / 6%);
        .title{
            @include ellipse;
            margin:0.8rem 0;
            padding: 0 0.8rem;
            font-size: 0.9rem;
            line-height: 1.05;
            color: var(--key-color);
        }
    }
}


@include tablet{
    .video-list{
        @include gallary(2rem,1);
    }
}

</style>