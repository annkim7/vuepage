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
        <div class="fade-title"><span>SPEAKERS</span></div>
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
            </div>
            <div class="description" :class="{ active: move }">
              <span class="line"></span>
              <span class="time">{{$store.state.schedule[this.fadeNum].time}}</span>
              <h3 class="subject">
                <router-link :to="{ path: `/detail/11/` + $store.state.schedule[this.fadeNum].id }">
                  {{$store.state.schedule[this.fadeNum].subject}}
                </router-link>
              </h3>
              <div class="belong">
                  <span>{{$store.state.schedule[this.fadeNum].name}}</span>
                  <span>{{$store.state.schedule[this.fadeNum].company}}</span>
              </div>
              <div class="fadeIn-button">
                <span @click="clickPrev()" class="prev"><font-awesome-icon :icon="['fa', 'angle-left']" /></span>
                <span @click="clickNext()" class="next"><font-awesome-icon :icon="['fa', 'angle-right']" /></span>
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
          <div class="mainCon">
            <div class="mainNotice-list">
              <ul>
                <li v-for="(notice, i) in noticeArr" :key="i">
                  <strong v-html="line(notice.title)" class="mainTitle"></strong>
                  <span class="mainDate">{{notice.time}}</span>
                </li>
              </ul>
            </div>
            <div class="mainVideo-list">
              <ul>
                <li v-for="(video, i) in videoArr" :key="i">
                  <img :src="video.poster"/>
                </li>
              </ul>
            </div>
          </div>
            
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
        move : false,
        timer : 0,
      }
    },
    mounted(){
      document.addEventListener('scroll', this.scroll, true);
      this.waveBg();
      this.sort();
      this.fade();
      this.notice();
      this.video();
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
        this.pageChangeFunc();
      },
      pageChangeFunc(){
          const inner = document.querySelectorAll(".inner-wrap");
          const el = inner[this.pageNum];
          CustomEase.create("custom", "M0,0 C0.266,0.412 0.571,0.079 0.7,0.2 0.744,0.241 0.78,1 1,1 ");

          for(var i=0; i<inner.length; i++){
              const notEl = inner[i];
              gsap.to(notEl, {
                duration: 1,
                transform: 'translateY(-100%)',
                opacity: 0,
                ease : "custom",
                
              })
          }

          gsap.to(el, {
            duration: 1,
            transform: 'translateY(0%)',
            opacity: 1,
            ease : "custom",
          })
      },
      prev(){
        this.fadeNum--;
        if(this.fadeNum < 0){
          this.fadeNum = this.$store.state.schedule.length - 1;
        }
        this.speakerCh();
      },
      next(){
        this.fadeNum++;
        if(this.fadeNum > this.$store.state.schedule.length - 1){
          this.fadeNum = 0;
        }
        this.speakerCh();
      },
      speakerCh(){
        this.opacity = 1;
        this.move = true;
        setTimeout(()=>{
          this.opacity = 0;
          this.move = false;
        }, 2300);
      },
      fade(){
        this.timer = setInterval(()=>{ this.next(); }, 3000);
      },
      unfade(){
        clearInterval(this.timer);
      },
      clickNext(){
        this.unfade();
        this.next();
        setTimeout(()=>{ this.fade(); }, 100);
      },
      clickPrev(){
        this.unfade();
        this.prev();
        setTimeout(()=>{ this.fade(); }, 100);
      },
      notice(){
        setTimeout(()=>{
          let noticeOriginal = [...this.$store.state.notice];
          let notice = noticeOriginal.sort(function(a,b){
            return b.date - a.date
          });
          this.noticeArr = notice.slice(0,4);
          console.log(this.noticeArr)
        }, 2000);
      },
      line(content){
        let bef = JSON.stringify(content);
        return bef.replace (/"/g,'');
      },
      video(){
        setTimeout(()=>{
          let videoOriginal = [...this.$store.state.video];
          let video = videoOriginal.sort(function(a,b){
            return b.date - a.date
          });
          this.videoArr = video.slice(0,4);
          console.log(this.videoArr)
        }, 2000);
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
  position:relative;
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

.fade-title{
  position:absolute;
  width:4rem;
  height:100%;
  top:0;
  right:1.1rem;
  background: #F0F0F2;
  border-left: 1px solid #d1d1d1;
  span{
    margin-top:8rem;
    transform:rotate(-90deg);
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.3rem;
    color: #0e0e0e;
  }
}

.fadeIn-box{
  @include center;
  position: relative;
  width:73%;
  height:23vw;
  .image{
    display:flex;
    position:relative;
    width: 30vw;
    height:100%;
    flex-direction: column;
    background: #38404A;
    &:before{
      @include bef;
      width:16vw;
      height:16vw;
      top: auto;
      bottom: -4vw;
      left: -4vw;
      border:3px solid #38404A;
    }
    .img{
      position: relative;
      width:100%;
      z-index:3;
    }
  }
  .description{
    position:relative;
    display:flex;
    width: 55vw;
    height:100%;
    padding-left:4rem;
    justify-content: center;
    flex-direction: column;
    .line{
      position:absolute;
      width:0;
      height:3px;
      top:6.3vw;
      left: -3.5vw;
      background: #fff;
      z-index:4;
    }
    .time{
      padding-top:0.8rem;
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
    .time, .subject, .belong{
      opacity:0;
      transform: translateY(-50%);
    }
  }
  .description.active{
    .line{
      width:11.5vw;
      transition: 0.6s linear 0.6s; 
    }
    .time, .subject, .belong{
      opacity:1;
      transform: translateY(0%);
      transition: 0.6s linear 0.3s;
    }
  } 
}

.fadeIn-button{
  display:flex;
  margin-top:1rem;
  span{
    @include center;
    width:3rem;
    height:3rem;
    background: #eeeeee;
    cursor:pointer;
  }
  span ~ span{
    margin-left:0.3rem;
  }
}

.opacity-enter-from{ opacity:0;}
.opacity-enter-active{ transition: all 0.8s;}
.opacity-enter-to{opacity:1;}

.opacity-leave-from{ opacity:1;}
.opacity-leave-active{ transition: all 0.8s;}
.opacity-leave-to{opacity:0;}


.mainCon{
  display:flex;
  margin: 0.6rem -1rem 0;
}
.mainNotice-list,
.mainVideo-list{
  width: calc((100% - 2rem)/2);
  margin: 0 1rem;
}

.mainNotice-list ul,
.mainVideo-list ul{
  display:flex;
  align-items: center;
  flex-flow:row wrap;
}

.mainNotice-list li{
  display:flex;
  width:100%;
  margin-top:1rem;
  strong{
    overflow:hidden;
    width:80%;
    padding-right:1.2rem;
    white-space:nowrap;
    text-overflow: ellipsis;
    font-size:1.25rem;
  }
  span{
    width:20%;
    font-size:1.1rem;
    color:#0e0e0e;
    text-align:right;
  }
}

.mainVideo-list ul{
  margin: -0.5rem;
}

.mainVideo-list li{
  width:calc((100% - 2rem)/2);
  margin: 0.5rem;
}

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