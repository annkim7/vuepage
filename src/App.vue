<template>
  <div class="wrap">
    <Header :menuList = "menuList"/>


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
