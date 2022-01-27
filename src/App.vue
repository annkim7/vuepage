<template>
  <div class="wrap">
    <Header :menuList = "menuList" :nav="nav" @open="open = $event"/>


  </div>
</template>

<script>
import Header from './components/Header'
import MenuList from './assets/data/menu.js'

export default {
  name: 'App',
  data(){
    return {
      menuList : MenuList,
      nav : true,
    }
  },
  methods: {
    isRespon() {
        if( screen.width <= 1023 ) {
            return true;
        }
        else {
            return false;
        }
    },
    open() {
      this.nav = true;
      console.log('open');
    }
  },
  created() {
      if (this.isRespon()) {
          this.nav = false
      }
      else {
          this.nav = true
      }
  },
  components: {
    Header,
  }
}
</script>

<style lang="scss" >
@import './assets/style/common.scss';
@import './assets/style/font.scss';
@import './assets/style/root.scss';

.wrap{
  overflow:hidden;
  position:relative;
  width:100%;
  height:100vh;
  background: var(--default-bg);
  @include text;
}



</style>
