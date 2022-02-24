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
                        <router-link :to="{ path: `/detail/` + $route.path.substr(8).charAt(0) + `0`}">
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
                <li v-for="(sub, j) in $store.state.menu[$route.path.substr(8).charAt(0)].subTitle" :key="j">
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

.pageList{
    @include layout;
    display:flex;
    border-top: 1px solid #DEDEDE;
    li{
        padding: 1.4rem 1rem;
        min-width:10%;
        text-align: center;
        font-size: 0.8rem;
    }
}
.siteMap{
    margin-top:0.5rem;
}
.siteCate-list{
    display:flex;
    li{
        position:relative;
        display: flex;
        font-size: 0.9rem;
        color: #cfcfcf;
    }
    svg{
        width: 0.25em;
        margin: 0 0.5rem;
    }
    
}

</style>