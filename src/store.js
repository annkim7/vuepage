import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
  state(){
    return {
      nav : true,
      mob : false,
      show : false,
      width: 0,
      height: 0,
      menu : {},
    }
  },
  mutations :{
    handleResize(state) {
      if (window.innerWidth < 1023) {
        this.responsive = true;
        state.nav = false;
        state.mob = true;
        console.log('mobile');
      } else {
        this.responsive = false;
        state.nav = true;
        state.mob = false;
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
    toggle(state) {
      if(state.show == false){
        state.show = true;
      }else{
        state.show = false;
      }
    },
  },
  actions : {
    getData(context){
      axios.get('https://annkim7.github.io/vuepage/src/assets/data/menu.js')
      .then((a)=>{
        console.log(a.data);
        context.commit('setMore', a.data);
      })
    },
  },
})

export default store