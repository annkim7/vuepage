<template>

  <div class="container">
    <section class="section" :class="{ active: this.pageNum == 0 }">
      
      <div class="inner-wrap">
        <div class="content">
            <div class="main-visual">
              <strong>Seoul Abstract Fair</strong>
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
              <strong>2022.12.25</strong>
            </div>
            <div class="word">
              <span class="top">SEMINAR</span>
              <span class="bottom">SEOUL</span>
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
          <!-- <div class="slide-box">
            <Carousel :autoplay="3000" :wrap-around="true">
              <Slide v-for="(schedule, i) in $store.state.schedule" :key="i">
                <div class="carousel__item">
                  <span class="img"><img :src="schedule.img"/></span>
                </div>
              </Slide>

              <template #addons>
                <Navigation />
                <Pagination />
              </template>s
            </Carousel>
          </div> -->
          <div class="fadeIn-box">
            <div class="image">
              <transition name="opacity">
                <span v-if="opacity" class="img"><img :src="$store.state.schedule[this.fadeNum].img"/></span>
              </transition>
              <!-- <span class="title">SPEAKERS</span> -->
            </div>
            <div class="description">
              <span class="time">{{$store.state.schedule[this.fadeNum].time}}</span>
              <h3 class="subject">{{$store.state.schedule[this.fadeNum].subject}}</h3>
              <div class="belong">
                  <span>{{$store.state.schedule[this.fadeNum].name}}</span>
                  <span>{{$store.state.schedule[this.fadeNum].company}}</span>
              </div>
              <div class="fadeIn-button">
                <span @click="prev()" class="prev">왼</span>
                <span @click="next()" class="next">오</span>
              </div>
            </div>
            
          </div>
        </div> 
      </div>
    </section>
    <section class="section" :class="{ active: this.pageNum == 3 }">
      <div class="inner-wrap">
        <div class="content">
          <h2 class="main-title">Notice</h2>
        </div>
        
      </div>
    </section>
  </div>

</template>

<script>
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
// import { defineComponent } from 'vue'
// import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';

// import 'vue3-carousel/dist/carousel.css';


gsap.registerPlugin(CustomEase);

export default {
    name : 'Main',
    components: {
      // Carousel,
      // Slide,
      // Pagination,
      // Navigation
    },
    data(){
      return{
        scrollTop : 0,
        pageNum : 0,
        active : false,
        sortArr : {},
        fadeNum : 0,
        opacity: 0,
      }
    },
    mounted(){
      document.addEventListener('scroll', this.scroll, true);
      this.waveBg();
      this.sort();
      this.fade();
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
          // console.log(this.sortArr)
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
      prev(){
        this.fadeNum--;
        if(this.fadeNum < 0){
          this.fadeNum = this.$store.state.schedule.length - 1;
        }
        this.speakerCh(this.fadeNum);
      },
      next(){
        this.fadeNum++;
        if(this.fadeNum > this.$store.state.schedule.length - 1){
          this.fadeNum = 0;
        }
        this.speakerCh(this.fadeNum);
      },
      speakerCh(number){
        console.log(number);
        this.opacity = 1;
        setTimeout(()=>{
          this.opacity = 0;
        }, 3300);
      },
      fade(){
        setInterval(()=>{
          this.next();
        }, 4000);
      }
    }
}
</script>

<style lang="scss">
@import '../assets/style/root.scss';


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

.content{
  @include center;
  position:relative;
  width: 80%;
  height:100%;
  margin: 0 auto;
  flex-direction: column;
  z-index: 5;
}

.main-title{
  @include lineTitle;
}

.main-visual{
  @include center;
  width:100%;
  height:100%;
  z-index: 1;
  strong{
    font-size: 1.2rem;
    color: #0e0e0e;
    font-weight: 900;
  }
}

.bg{
  width:60%;
  height:100%;
  margin: 0 1rem;
  // clip-path: circle(46% at 50% 50%);
  svg {
    width:100%;
    height: 100%;
    #wave {
      fill: none;
      stroke-width: 4;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  }
}

.word{
  @include centerPos;
  font-size:40rem;
  color:#EEEEEE;
  font-weight:900;
  .top{
    transform: translate(-50%, 0%);
  }
  .bottom{
    transform: translate(50%, 0%);
  }
}

section:nth-of-type(2){
  background:#f9f9f9;
}

section .item-list{
    @include gallary(2rem,4);
}

// .slide-box{
//   width:100%;
//   background: #fff;
// }

// .carousel{
//   width:100%;
//   height:auto;
// }
// .carousel__item {
//   min-height: 200px;
//   width: 100%;
//   color:  var(--key-color);
//   font-size: 20px;
//   border-radius: 8px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .carousel__slide {
//   padding: 10px;
// }

// .carousel__prev,
// .carousel__next {
//   box-sizing: content-box;
//   border: 5px solid white;
// }

// .carousel__pagination-button{
//   background: var(--key-color);
// }

// .carousel__pagination-button--active{
//   background: #0e0e0e;
// }

.fadeIn-box{
  @include center;
  position: relative;
  width:100%;
  height:36.2vw;
  .image{
    display:flex;
    width: 40%;
    height:100%;
    // background: #3F4756;
    flex-direction: column;
    .img{
      width:100%;
    }
    // .title{
    //   display:flex;
    //   position:absolute;
    //   width:100%;
    //   height:4rem;
    //   padding: 0 1rem;
    //   bottom:0;
    //   align-items: center;
    //   justify-content: flex-end;
    //   font-size: 1.8rem;
    //   color:#f9f9f9;
    // }
  }
  .description{
    display:flex;
    position:relative;
    width: 60%;
    height:100%;
    padding-left:4rem;
    background: #f9f9f9;
    justify-content: center;
    flex-direction: column;
    &:before{
      @include bef;
      width:30%;
      top:28%;
      left: 0;
      height:3px;
      margin-left:4rem;
      background: #38404A;
    }
    .time{
      font-size: 0.95rem;
      color:#d1d1d1;
    }
    .subject{
      margin: 0.5rem 0 1rem;
      font-size:3rem;
      font-weight: 700;
      color:#38404A;
    }
    .belong{
      @include befBar(#38404A);
      font-size: 1rem;
    }
  }
}

.fadeIn-button{
  display:flex;
  span{
    @include center;
    width:3rem;
    height:3rem;
    border:1px solid #38404A;
    cursor:pointer;
  }
}

.opacity-enter-from{ opacity:0;}
.opacity-enter-active{ transition: all 0.8s;}
.opacity-enter-to{opacity:1;}

.opacity-leave-from{ opacity:1;}
.opacity-leave-active{ transition: all 0.8s;}
.opacity-leave-to{opacity:0;}

@include tablet{
    section .item-list{
        @include gallary(2rem,2);
    }
}

@include mobile{
    section .item-list{
        @include gallary(2rem,1);
    }
}

</style>