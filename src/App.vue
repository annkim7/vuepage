<template>
  <div class="wrap" v-resize="onResize">
    <Header />
    <router-view></router-view>
    <!-- <img src="./assets/7002.jpg"/> -->
    
    
  </div>
</template>

<script>
import Header from './components/Header'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  data(){
    return {}
  },
  mounted() {
      this.getData()
  },
  methods: {
    onResize() {
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
  height: 100vh;
  background: var(--default-bg);
  @include text;
}


</style>
