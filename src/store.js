import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      nav : true,
    }
  },
  mutations :{
    handleResize(state) {
      if (window.innerWidth < 1023) {
        this.responsive = true;
        state.nav = false;
        console.log('mobile');
      } else {
        this.responsive = false;
        state.nav = true;
        console.log('pc');
      }
    },
    open(state) {
      state.nav = true;
      console.log('open');
    },
    close(state) {
      state.nav = false;
      console.log('close');
    },
  },
  actions : {
    
  },
})

export default store