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
      title : {},
      description: {},
      notice : {},
      popData : {},
      findArray : {},
      break : {},
      string : {},
      strTitle : {},
      video : {}
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
      this.commit('lineBreak', state.moId);
    },
    modalClose(state){
      state.isOpen = false;
    },
    setNotice(state, data){
      state.notice = data
    },
    find(state, data){
      let findArray = data.substr(8).slice(0,2);
      let findId = data.substr(11);
      if(findArray == '11'){
        state.findArray = state.schedule.find(x => x.id === findId);
      }else if(findArray == '21'){
        state.findArray = state.notice.find(y => y.id === findId);
      }
      this.commit('way', state.findArray);
    },
    way(state, data){
      if(data.content != undefined){
        state.string = data.content;
        state.strTitle = data.title;
      }else if(data.description != undefined){
        state.string = data.description;
      }
      this.commit('lineBreak', state.string);
      this.commit('strTitle', state.strTitle);
    },
    lineBreak(state, data){
      if(isNaN(data) == false){
        let a = state.schedule[data].description;
        state.description = a.split('\n').join('<br><br>');
      }else{
        state.break = data.split('\n').join('<br><br>');
        this.commit('stringify', state.break);
      }
    },
    stringify(state, data){
      let str = JSON.stringify(data);
      state.description = str.replace (/"/g,'');
    },
    strTitle(state, data){
      let strTitle = JSON.stringify(data);
      state.title = strTitle.replace (/"/g,'');
    },
    setVideo(state, data){
      state.video = data
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
    getNotice(context){
      axios.get('https://annkim7.github.io/vuepage/src/assets/data/notice.json')
      .then((d)=>{
        console.log(d.data);
        context.commit('setNotice', d.data);
      })
    },
    getVideo(context){
      axios.get('https://annkim7.github.io/vuepage/src/assets/data/video.json')
      .then((e)=>{
        console.log(e.data);
        context.commit('setVideo', e.data);
      })
    }
  },
})

export default store