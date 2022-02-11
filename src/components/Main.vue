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
          <h2 class="top-title">Lorem Ipsum</h2>
          <p>Lorem Ipsum is simply dummy<br>text of the printing</p>
        </div>
      </div>
    </section>
    <section class="section" :class="{ active: this.pageNum == 1 }">
      <div class="inner-wrap">
        <h2 class="main-title">Random text</h2>
        <div class="item-box">
          <div class="item">게시판 형태</div>
          <div class="item">게시판 형태</div>
          <div class="item">게시판 형태</div>
          <div class="item">게시판 형태</div>
        </div>
      </div>
    </section>
    <section class="section" :class="{ active: this.pageNum == 2 }">
      <div class="inner-wrap">
        <div class="half-box">
          <div class="item"></div>
          <div class="txt">
            <h2 class="main-title">메인제목3</h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
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

gsap.registerPlugin(CustomEase);

export default {
    name : 'Main',
    data(){
      return{
        scrollTop : 0,
        pageNum : 0,
        active : false,
      }
    },
    mounted(){
      document.addEventListener('scroll', this.scroll, true);
      this.waveBg();
      
    },
    unmounted() {
      document.removeEventListener('scroll', this.scroll, true);
    },
    methods:{
      waveBg(){
          var svg  = document.querySelector("svg");
          var wave = document.querySelector("#wave");

          var width = window.innerWidth;
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
      }
    }
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';




section {
  overflow:hidden;
  position: relative;
  height: 100vh;
  width: 100vw;
  
}

.bg{
  @include centerPos;
  width:100%;
  height:100%;
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


.inner-wrap{
  width:100%;
  height:100%;
  opacity:0; transform:translateY(100%);
}
// section .inner-wrap{opacity:0; transform:translateY(100%); transition: all 0.3s;}
// section.active .inner-wrap{opacity: 1; transform:translateY(0);}



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

.content{
  @include centerPos;
  z-index: 5;
}

.content p{
  @include title;
  margin-top: 2rem;
  font-size: 3rem;
  line-height: 1.3;
  color: #000;
  text-align: center;
}

.item-box{
  display:flex;
  margin: 5rem 0;
}
.item{
  @include center;
  width: 23%;
  height: 500px;
  margin: 0 2%;
  color: #fff;
  background: var(--default-color);
}

.half-box{
  @include center;
}

.half-box .txt{
  width: 50%;
}


</style>