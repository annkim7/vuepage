<template>
    <div class="notice-area">
        <div class="notice-wrap">
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
            <div class="notice-box">
                <table class="notice-table">
                    <thead>
                        <tr>
                            <th class="no">번호</th>
                            <th class="title">제목</th>
                            <th class="author">작성자</th>
                            <th class="time">작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(notice, i) in $store.state.notice" :key="i">
                            <td class="no">{{(i + 1)}}</td>
                            <td v-html="stringify(notice.title)" class="title"></td>
                            <td class="author">{{notice.author}}</td>
                            <td class="time">{{notice.time}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Detail21',
    mounted(){
        
    },
    methods:{
        stringify(content){
            let bef = JSON.stringify(content);
            return bef.replace (/"/g,'');
        }
    }
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.notice-area{
    @include layout;
}

.notice-wrap{
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
    .notice-box{
        width:100%;
        margin-top:2.5rem;
    }
}



.notice-table{
    width:100%;
    border-top: 1px solid #0e0e0e;
    border-bottom: 1px solid #0e0e0e;
    tr{
        display:flex;
        text-align: center;
        th, td{
            padding: 1.3rem 0.4rem;
        }
        th{
            background: #f3f3f3;
        }
        .no{
            min-width:5%;
        }
        .title{
            flex: 1 1 0;
        }
        td.title{
            padding-left:2rem;
            text-align: left;
        }
        .author{
            min-width:12%;
        }
        .time{
            min-width:12%;
        }
    }
}
</style>