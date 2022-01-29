<template>
  <div class="wrap">
    <Header :menuList = "menuList" />
    <img src="./assets/7002.jpg"/>
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
  mounted() {
      window.addEventListener('resize', this.respon);
      this.respon;
  },
  unmounted() {
      window.removeEventListener('resize', this.respon);
  },
  methods: {
  },
  computed: {
    respon(){
      return this.$store.commit('handleResize')
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
  background: var(--default-bg);
  @include text;
}



</style>
