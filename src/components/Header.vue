<template>
    <header class="header-wrap">
        <h1 class="logo"><img src="../assets/logo.png"/></h1>
        <div class="header-box" v-if="$store.state.nav == true">
            <span v-if="$store.state.nav == true" @click="$store.commit('close')" class="mobileNav-btn close"></span>
            <header class="header">
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
            </header>
        </div>
        <span @click="$store.commit('open')" class="mobileNav-btn"><font-awesome-icon :icon="['fas', 'bars']" /></span>
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

.header-box, .header{
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
    position:relative;
    display:none;
}
.mobileNav-btn svg.fa-bars{
    width:1.3em;
    height: 1.5em;
}
// .mobileNav-btn:before{
//     @include bef;
//     content: "\f0c9";
//     font-size: 1.33rem;
//     line-height: 1;
//     color: #cacaca;
//     font-family: "Font Awesome 5 Free";
//     font-weight: 100;
// }

@include tablet{
    .header-wrap{
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
    .header-box{
        position: fixed;
        top:0;
        left:0;
        bottom:0;
        right:0;
        width:100%;
        height:100%;
        align-items: flex-start;
        background: var(--dim);
        z-index: 999;
    }
    
    .header{
        width: 80%;
        height:auto;
        flex-flow: row wrap;
        flex: 0 0 auto;
    }
    .header:before{
        @include bef;
        width: 80%;
        background: var(--white);
    }
    .nav-box, .side-box{
        width:100%;
        height:auto;
    }
    .nav-box{
        order: 2;
    }
    .side-box{
        padding: 2rem 1.66rem;
        order: 1;
    }
    
    .nav-list, .side-list, .nav-list li, .side-list li{
        height: auto;
    }
    .side-list{
        justify-content: flex-end;
    }
    .nav-list{
        flex-direction: column;
    }
    .nav-list li{
        width: auto;
        
        flex-direction: column;
        
    }
    .nav-list li ~ li{
        margin-left:0;
    }
    
    .navTit{
        padding: 0.6rem 0;
        background: var(--key-color);
    }
    .navTit-list{
        position:relative;
        width:100%;
        top:auto;
    }
    .navTit-list li{
        width: 100%;
        padding: 0.6rem 0;
        background: var(--white);
    }

    .mobileNav-btn{
        @include centerTop;
        display:block;
        position:absolute;
        right: 1rem;
    }
    .mobileNav-btn.close{
        width:20%;
        height:100%;
        right:0;
    }
}

@include mobile{

}

</style>