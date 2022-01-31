<template>
    <header class="header-wrap">
        <h1 class="logo"><img src="../assets/logo.png"/></h1>
        <transition name="slideIn">
            <div v-if="$store.state.nav == true" class="header-box">
                <span v-if="$store.state.nav == true" @click="$store.commit('close')" class="mobileNav-btn close"></span>
                <header class="header">
                    <nav class="nav-box">
                        <ul class="nav-list">
                            <li v-for="(menu, i) in menuList" :key="i">
                                <strong @click="$store.commit('toggle');" class="navTit">{{menu.bigTitle}}</strong>
                                <transition name="slideDown">
                                    <ul v-if="$store.state.show == true" class="navTit-list">
                                        <li v-for="sub in menu.subTitle" :key="sub">{{sub}}</li>
                                    </ul>
                                </transition> 
                                
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
        </transition>
        <span v-if="$store.state.mob == true" @click="$store.commit('open')" class="mobileNav-btn"><font-awesome-icon :icon="['fas', 'bars']" /></span>
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
        padding: 1.2rem 0;
        background: var(--key-color);
    }
    .navTit-list{
        overflow: hidden;
        position:relative;
        width:100%;
        height:100%;
        top:auto;
    }
    .navTit-list li{
        width: 100%;
        padding: 1.2rem 0;
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


    .slideIn-enter-from { 
        opacity: 0;
        transform: translateX(-100%);
        background: transparent;
    }
    .slideIn-enter-active {
        transition: transform 0.3s,
                    background 0.3s linear 0.6s; 
    }
    .slideIn-enter-to {
        opacity: 1;
        transform: translateX(0%);
        background: var(--dim);
    }
    

    .slideDown-enter-from {
        overflow: hidden;  
        opacity: 0;
        height:0;
    }
    .slideDown-enter-active {
        transition: all 1s ease-in-out; 
    }
    .slideDown-enter-to {
        overflow: hidden;  
        opacity: 1;
        height:100%;
    }

}

@include mobile{

}


</style>