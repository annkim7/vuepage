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
      item : {},
      step : 0,
      isActive: false,
      value: null,
      schedule : {},
      isOpen : false,
      moId: 0,
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
      // console.log(state.num);
    },
    setItem(state, data){
      state.item = data
    },
    like(state, data){
      if(state.item[data].click == false){
        state.item[data].click = true;
        state.item[data].like++;
      }else{
        state.item[data].click = false;
        state.item[data].like--;
        
      }
    },
    toggleList(state){
        state.isActive = !state.isActive;
    },
    setValue(state, data){
        state.isActive = false;                    
        state.value = data;
    },
    setSchedule(state, data){
      state.schedule = data
    },
    modal(state, data){
      state.isOpen = true;
      state.moId = data;
    },
    modalClose(state){
      state.isOpen = false;
    }
  },
  actions : {
    getData(context){
      axios.get('https://annkim7.github.io/vuepage/src/assets/data/menu.json')
      .then((a)=>{
        console.log(a.data);
        context.commit('setMenu', a.data);
      })
    },
    getItem(context){
      axios.get('https://annkim7.github.io/vuepage/src/assets/data/itemList.json')
      .then((b)=>{
        console.log(b.data);
        context.commit('setItem', b.data);
      })
    },
    getSchedule(context){
      axios.get('https://annkim7.github.io/vuepage/src/assets/data/schedule.json')
      .then((c)=>{
        console.log(c.data);
        context.commit('setSchedule', c.data);
      })
    },
  },
})

export default store