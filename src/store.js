import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore({
  state(){
    return {
      nav : true,
      mob : false,
      show : 0,
      menu : {},
      num : 0,
    }
  },
  mutations :{
    setMenu(state, data){
      state.menu = data
    },
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
      state.show = state.num
      console.log(state.num);
      
    },
  },
  actions : {
    getData(context){
      axios.get('https://annkim7.github.io/vuepage/src/assets/data/menu.json')
      .then((a)=>{
        console.log(a.data);
        context.commit('setMenu', a.data);
      })
    },
  },
})

export default store