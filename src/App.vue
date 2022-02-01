<template>
  <div class="wrap" v-resize="onResize">
    <!-- <Header :menuList = "menuList" /> -->
    <Header />
    <img src="./assets/7002.jpg"/>
    
  </div>
</template>

<script>
import Header from './components/Header'
// import MenuList from './assets/data/menu.js'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  data(){
    return {
      // menuList : MenuList,
      // width: 0,
      // height: 0,
    }
  },
  mounted() {
      this.getData()
      // this.width = this.$el.offsetWidth;
      // this.height = this.$el.offsetHeight;
  },
  methods: {
    onResize() {
      // this.width = width;
      // this.height = height;
      this.$store.commit('handleResize')
    },
    ...mapActions([
      'getData'
    ])
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
