<template>
    <header class="header-wrap">
        <h1 class="logo">로고</h1>
        <nav class="nav-box">
            <ul class="nav-list">
                <li v-for="menu in menuList" :key="menu">
                    <span class="navTit">{{menu.bigTitle}}</span>
                    <ul class="navTit-list">
                        <li v-for="sub in menu.subTitle" :key="sub">{{sub}}</li>
                    </ul>
                </li>
            </ul>
        </nav>
        <aside class="side-box">
            <ul class="side-list">
                <li>마이페이지</li>
                <li>국문</li>
                <li>영문</li>
            </ul>
        </aside>
    </header>
</template>

<script>
export default {
    name : 'Header',
    props : {
        menuList : Array,
    },
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.header-wrap{
  @include center;
  width:100%;
  height:60px;
  padding: 0 1rem;
  background:#fff;
  justify-content: space-between;
}

.nav-box, .side-box{
    height:100%;
}

.nav-list, .side-list{
  display:flex;
  height:100%;
}

.nav-list li, .side-list li{
    @include center;
    position:relative;
    height:100%;
}

.nav-list li{
    width:12rem;
}

.nav-list li ~ li, .side-list li ~ li{
  margin-left: 1rem;
}

.navTit:hover + .navTit-list, .navTit-list:hover{
    display:block;
}

.navTit{
    @include center;
    height:100%;
    cursor:pointer;
}

.navTit-list{
    display:none;
    position: absolute;
    top: 60px;
}

.navTit-list li{
    padding: 0.6rem 0;
    background: #fff;
    cursor:pointer;
}

.navTit-list li ~ li{
    margin-left:0;
}

</style>