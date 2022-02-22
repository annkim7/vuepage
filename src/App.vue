<template>
  <div class="wrap" v-resize="onResize">
    <Header />
    
    <router-view></router-view>   
    
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  data(){
    return {}
  },
  mounted(){
    this.getData();
    this.getItem();
  },  
  methods: {
    onResize() {
      this.$store.commit('handleResize')
    },
    ...mapActions([
      'getData', 'getItem'
    ]),
  },
  components: {
    Header,
    Footer,
  }
}
</script>

<style lang="scss" >
@import './assets/style/common.scss';
@import './assets/style/font.scss';
@import './assets/style/root.scss';
@import '~@fortawesome/fontawesome-free/css/all.min.css';

.wrap{
  overflow-x: hidden;
  position:relative;
  width:100%;
  height: 100vh;
  background: var(--default-bg);
  @include text;
}



</style>
