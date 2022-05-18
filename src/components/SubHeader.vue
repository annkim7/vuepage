<template>
    <div class="subHeader-wrap">
        <div class="subHeader-box">
            <h3 class="pageTitle">
                <router-link :to="{ path: `/detail/` + $route.path.substr(8) }">
                    {{$store.state.menu[$route.path.substr(8).charAt(0)].subTitle[$route.path.substr(8).charAt(1)]}}
                </router-link>
            </h3>
            <div class="siteMap">
                <ul class="siteCate-list">
                    <li class="home">
                        <router-link to="/">
                            Home
                        </router-link>
                        <font-awesome-icon :icon="['fas', 'angle-right']" />
                    </li>
                    <li class="main-category">
                        <router-link :to="{ path: `/vuepage/detail/` + $route.path.substr(8).charAt(0) + `0`}">
                            {{$store.state.menu[$route.path.substr(8).charAt(0)].bigTitle}}
                        </router-link>
                        <font-awesome-icon :icon="['fas', 'angle-right']" />
                    </li>
                    <li class="sub-category">
                        <router-link :to="{ path: `/detail/` + $route.path.substr(8) }">
                            {{$store.state.menu[$route.path.substr(8).charAt(0)].subTitle[$route.path.substr(8).charAt(1)]}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="subList-box">
            <ul class="pageList">
                <li v-for="(sub, j) in $store.state.menu[$route.path.substr(8).charAt(0)].subTitle" :key="j" :class="{ active: $route.path.substr(8).charAt(1) == j }">
                    <router-link :to="{ path: `/detail/` + $route.path.substr(8).charAt(0) + j}">
                        {{sub}}
                    </router-link>
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
export default {
    name : 'SubHeader',
}
</script>


<style lang="scss" >
@import '../assets/style/root.scss';

.subHeader-wrap{
    @include layout;
    margin-top: 60px;
}

.subHeader-box{
    padding: 3.5rem 0 3.5rem;
}
.pageTitle{
    @include title;
    font-size: 2.3rem;
}

.subList-box{
    @include layout;
    border-top: 1px solid #DEDEDE;
}
.pageList{
    
    display:flex;
    
    li{
        padding: 1.4rem 0;
        font-size: 0.8rem;
    }
    li.active{
        position:relative;
        &:before{
            position:absolute;
            bottom:0;
            left:0;
            width:100%;
            height:2px;
            background: #D1D1D1;
            content:'';
        }
    }
    li ~ li{
        margin-left:1.5rem;
    }
}
.siteMap{
    margin-top:0.5rem;
}
.siteCate-list{
    display:flex;
    margin-top:0.5rem;
    li{
        position:relative;
        display: flex;
        font-size: 0.8rem;
        color: #cfcfcf;
    }
    svg{
        width: 0.25em;
        margin: 0 0.2rem;
    }
    
}


@include tablet{
    .subHeader-box{
        padding: 3.5rem 0.66rem 3.5rem;
    }
    .pageList{
        padding:0 0.66rem;
    }
}

@include mobile{
    .subList-box{
        overflow:auto;
        
    }
    .pageList{
        width:400px;
    }
}
</style>