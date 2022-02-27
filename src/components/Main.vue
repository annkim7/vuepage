<template>

  <div class="container">
    <section class="section" :class="{ active: this.pageNum == 0 }">
      <div class="bg"> 
          <svg>
            <defs>
              <polyline id="wave" />
            </defs>  
            <g>     
              <use xlink:href="#wave" x="-30" stroke="#5A5A5A"/>
              <use xlink:href="#wave" x="0" stroke="#C9C9C9"/>
              <use xlink:href="#wave" x="30" stroke="#A0A0A0"/>
            </g>
          </svg>
      </div>
      <div class="inner-wrap">
        <div class="content">
          <div class="word">
            SEMINAR
          </div>
          
        </div>
      </div>
    </section>
    <section class="section" :class="{ active: this.pageNum == 1 }">
      <div class="inner-wrap">
        <div class="content">
          <h2 class="main-title">Best Exhibitor</h2>
          <div class="item-box">
              <ul class="item-list">
                  <li v-for="(item, i) in sortArr" :key="i" class="item" >
                      <div class="image">
                          <router-link :to="{ path: `/detail/20/` + item.id }">
                              <span class="img"><img :src="item.img"/></span>
                          </router-link>
                      </div>
                      <div class="summary">
                          <strong class="title">{{item.title}}</strong>
                          <span @click="$store.commit('like', item.id)" class="like">
                              <em class="heart" :class="{ active: item.click == true }"></em>
                              <i class="count">{{item.like}}</i>
                          </span>
                          <p class="text">{{item.text}}</p>
                      </div>
                  </li>
              </ul>
          </div>
        </div>
        
      </div>
    </section>
    <section class="section" :class="{ active: this.pageNum == 2 }">
      <div class="inner-wrap">
        <div class="content">
            <Carousel :autoplay="2000" :wrap-around="true">
              <Slide v-for="slide in 4" :key="slide">
                <div class="carousel__item">{{ slide }}</div>
              </Slide>
              
              <!-- <Slide>
                <div class="carousel__item">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80">
                </div>
                <div class="carousel__item">
                  <img src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60">
                </div>
                <div class="carousel__item">
                  <img src="https://images.unsplash.com/photo-1547486924-820807a1a076?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
                </div>
                <div class="carousel__item">
                  <img src="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80">
                </div>
              </Slide> -->

              <template #addons>
                <Pagination />
              </template>
            </Carousel>
        </div>
      </div>
    </section>
    <section class="section" :class="{ active: this.pageNum == 3 }">
      <div class="inner-wrap">
        <h2 class="main-title">메인제목4</h2>
      </div>
    </section>
  </div>

</template>

<script>
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
// import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';


gsap.registerPlugin(CustomEase);

export default {
    name : 'Main',
    components: {
      Carousel,
      Slide,
      Pagination,
    },
    data(){
      return{
        scrollTop : 0,
        pageNum : 0,
        active : false,
        sortArr : {},
      }
    },
    mounted(){
      document.addEventListener('scroll', this.scroll, true);
      this.waveBg();

      this.sort();
    },
    unmounted() {
      document.removeEventListener('scroll', this.scroll, true);
    },
    methods:{
      waveBg(){
          var svg  = document.querySelector("svg");
          var wave = document.querySelector("#wave");

          var width = svg.clientWidth;
          var sinus = CustomEase.create("sinus", "M0,0 C0.4,0 0.3,1 0.5,1 0.7,1 0.6,0 1,0");

          var amplitude = 240;
          var frequency = 10;
          var segments  = 1000;
          var interval  = width / segments;
          gsap.defaults({
            ease: "sine.inOut"
          });

          gsap.set("g", {
            y: window.innerHeight / 2
          });

          for (var i = 0; i <= segments; i++) {
            
            var norm = 1 - i / segments;
            var point = wave.points.appendItem(svg.createSVGPoint());
            
            point.x = i * interval;
            point.y = amplitude / 2 * sinus(norm);
              
            gsap.to(point, 0.8, { 
              duration: 0.8,
              y: -point.y, 
              repeat: -1, 
              yoyo: true 
            }).progress(norm * frequency);  
          }
      },
      sort(){
        setTimeout(()=>{
          let sortOriginal = [...this.$store.state.item];
          let sort = sortOriginal.sort(function(a,b){
            return b.like - a.like
          });
          this.sortArr = sort.slice(0,4);
          console.log(this.sortArr)
        }, 2000);
      },
      scroll(e){
        this.scrollTop = e.target.scrollTop;
        const section = document.getElementsByTagName("section");

        console.log('scroll', this.scrollTop, 'page', this.pageNum);

        this.active == true;
        for(var i= 0; i < section.length; i++){
          if(this.scrollTop > section[i].offsetTop - window.outerHeight/1.5 && this.scrollTop < section[i].offsetTop - window.outerHeight/1.5 + section[i].offsetHeight){
            this.pageNum = i;
            // console.log(this.pageNum);
            
            break;
          }
        }
        // this.pageChangeFunc();
      },
      // pageChangeFunc(){
      //     const inner = document.querySelectorAll(".inner-wrap");
      //     const el = inner[this.pageNum];
      //     CustomEase.create("custom", "M0,0 C0.266,0.412 0.571,0.079 0.7,0.2 0.744,0.241 0.78,1 1,1 ");

      //     for(var i=0; i<inner.length; i++){
      //         const notEl = inner[i];
      //         gsap.to(notEl, {
      //           duration: 1,
      //           transform: 'translateY(-100%)',
      //           opacity: 0,
      //           ease : "custom",
                
      //         })
      //     }

      //     gsap.to(el, {
      //       duration: 1,
      //       transform: 'translateY(0%)',
      //       opacity: 1,
      //       ease : "custom",
      //     })
      // },
      
    }
}
</script>

<style lang="scss">
@import '../assets/style/root.scss';

.carousel{
  width:100%;
  height:300px;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color:  var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}


section {
  overflow:hidden;
  position: relative;
  height: 100vh;
  width: 100vw;
  
}

.inner-wrap{
  width:100%;
  height:100%;
  // opacity:0; transform:translateY(100%);
}
// section .inner-wrap{opacity:0; transform:translateY(100%); transition: all 0.3s;}
// section.active .inner-wrap{opacity: 1; transform:translateY(0);}


.bg{
  // @include centerPos;
  position:absolute;
  top:0;
  right:0;
  width:60%;
  height:100%;
  clip-path: circle(32% at 50% 50%);
  background: #fff;
}

svg {
  width:100%;
  margin: 0 auto;
  height: 100%;
}

line {
  stroke-width: 1;
  stroke: #3c3c3c;
}

#wave {
  fill: none;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
  // stroke: var(--default-color);
}

.content{
  @include centerPos;
  width: 70%;
  z-index: 5;
}

.word{
  font-size:8rem;
}


.top-title{
  @include title;
  font-size: 7rem;
  color: #fff;
  text-align: center;
}

.main-title{
  @include title;
  margin-top:5rem;
  font-size: 2.5rem;
  text-align: center;
}

section .item-list{
    @include gallary(2rem,4);
    li{
      &:nth-of-type(n+4){
        margin-top:0;
        margin-left: 2rem;
      }
    }
}




</style>