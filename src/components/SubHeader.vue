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

.subHeader-box{
    padding: 3.5rem 0 2.6rem;
    text-align: center
}
.pageTitle{
    @include title;
    display: inline-block;
    text-align: center;
}

.subList-box{
    border-top: 1px solid var(--default-color);
    border-bottom: 1px solid var(--default-color);
}
.pageList{
    @include center;
    @include layout;
    li{
        padding: 1.4rem 1rem;
        min-width:10%;
        text-align: center;
    }
}
.siteMap{
    margin-top:1.2rem;
}
.siteCate-list{
    @include center;
    li{
        position:relative;
        display: flex;
        font-size: 0.9rem;
    }
    svg{
        width: 0.25em;
        margin: 0 0.5rem;
    }
    
}

</style>