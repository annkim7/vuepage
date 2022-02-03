<template>
    <div class="siteMap">
        <ul class="siteCate-list">
            <li class="home">
                <router-link to="/">
                    Home
                </router-link>
            </li>
            <li class="main-category">
                <router-link :to="{ path: `/detail/` + $route.params.id.charAt(0) + `0`}">
                    {{$store.state.menu[$route.params.id.charAt(0)].bigTitle}}
                </router-link>
            </li>
            <li class="sub-category">
                
                    {{$store.state.menu[$route.params.id.charAt(0)].subTitle[$route.params.id.charAt(1)]}}
                
            </li>
        </ul>
    </div>
    
</template>

<script>
export default {
    name : 'Detail',

}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.siteMap{
    padding:1.2rem 0;
}
.siteCate-list{
    @include center;
    li{
        position:relative;
        &:before{
            @include bef;
            width:10px;
            height:10px;
        }
    }
    li ~ li{
        padding-left: 1rem;
    }
    
}

</style>