<template>
    <header class="header-wrap">
        <h1 class="logo"><img src="../assets/logo.png"/></h1>
        <div class="header-box" v-if="nav == true">
            <nav class="nav-box">
                <ul class="nav-list">
                    <li v-for="menu in menuList" :key="menu">
                        <strong class="navTit">{{menu.bigTitle}}</strong>
                        <ul class="navTit-list">
                            <li v-for="sub in menu.subTitle" :key="sub">{{sub}}</li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <aside class="side-box">
                <ul class="side-list">
                    <li>My</li>
                    <li>Ko</li>
                    <li>En</li>
                </ul>
            </aside>
            
        </div>
        <span @click="click" class="mobileNav-btn">토글</span>
    </header>
</template>

<script>
export default {
    name : 'Header',
    props : {
        menuList : Array,
        nav : Boolean,
    },
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.header-wrap{
  @include center;
  position:relative;
  width:100%;
  height:60px;
  padding: 0 1rem;
  background: var(--white);
  justify-content: space-between;
}

.logo{
    max-width:30px;
    max-height:30px;
}

.logo img{
    height:100%;
    object-fit: cover;
}

.header-box{
    display:flex;
    flex : 1 1 0;
    height:100%;
}

.nav-box, .side-box{
    height:100%;
}

.nav-box{
    flex : 1 1 0;
}

.nav-list, .side-list{
  display:flex;
  height:100%;
}

.nav-list{
    justify-content: center
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
    width:100%;
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
    background: var(--white);
    cursor:pointer;
}

.navTit-list li ~ li{
    margin-left:0;
}

.mobileNav-btn{
    display:none;
}

@include tablet{
    .header-wrap{
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    .header-box{
        position: absolute;
        width: 80%;
        top:0;
        left:0;
        flex-direction: column;
        background: var(--white);
    }
    .nav-list{
        flex-direction: column;
    }
    .nav-list li{
        width: auto;
    }
    .nav-list li ~ li{
        margin-left:0;
    }
    .mobileNav-btn{
        @include centerTop;
        display:block;
        position:absolute;
        right: 1rem;
    }
}

@include mobile{

}

</style>