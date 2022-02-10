<template>

  
  <div class="container">
    <section class="section" :class="{ active: this.pageNum == 0 }">
      <div class="inner-wrap">
          <div class="wave">
          <svg id="wave" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 490">
            <path style="transform:translate(0, 0px); opacity:1" fill="#5A5A5A" d="M0,392L60,343C120,294,240,196,360,155.2C480,114,600,131,720,171.5C840,212,960,278,1080,269.5C1200,261,1320,180,1440,163.3C1560,147,1680,196,1800,187.8C1920,180,2040,114,2160,89.8C2280,65,2400,82,2520,81.7C2640,82,2760,65,2880,65.3C3000,65,3120,82,3240,130.7C3360,180,3480,261,3600,285.8C3720,310,3840,278,3960,245C4080,212,4200,180,4320,212.3C4440,245,4560,343,4680,318.5C4800,294,4920,147,5040,89.8C5160,33,5280,65,5400,130.7C5520,196,5640,294,5760,302.2C5880,310,6000,229,6120,220.5C6240,212,6360,278,6480,285.8C6600,294,6720,245,6840,220.5C6960,196,7080,196,7200,163.3C7320,131,7440,65,7560,49C7680,33,7800,65,7920,89.8C8040,114,8160,131,8280,138.8C8400,147,8520,147,8580,147L8640,147L8640,490L8580,490C8520,490,8400,490,8280,490C8160,490,8040,490,7920,490C7800,490,7680,490,7560,490C7440,490,7320,490,7200,490C7080,490,6960,490,6840,490C6720,490,6600,490,6480,490C6360,490,6240,490,6120,490C6000,490,5880,490,5760,490C5640,490,5520,490,5400,490C5280,490,5160,490,5040,490C4920,490,4800,490,4680,490C4560,490,4440,490,4320,490C4200,490,4080,490,3960,490C3840,490,3720,490,3600,490C3480,490,3360,490,3240,490C3120,490,3000,490,2880,490C2760,490,2640,490,2520,490C2400,490,2280,490,2160,490C2040,490,1920,490,1800,490C1680,490,1560,490,1440,490C1320,490,1200,490,1080,490C960,490,840,490,720,490C600,490,480,490,360,490C240,490,120,490,60,490L0,490Z"></path>
          </svg>
        </div>
        <div class="content">
          <h2 class="top-title">Lorem Ipsum</h2>
          <p>Lorem Ipsum is simply dummy<br>text of the printing</p>
        </div>
      </div>
    </section>
    <section class="section" :class="{ active: this.pageNum == 1 }">
      <div class="inner-wrap">
        <h2 class="main-title">메인제목2</h2>
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
      <h2>메인제목4</h2>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";

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
      document.addEventListener('scroll', this.scroll, true)
    },
    unmounted() {
      document.removeEventListener('scroll', this.scroll, true);
    },
    methods:{
      scroll(e){
        this.scrollTop = e.target.scrollTop;
        const section = document.getElementsByTagName("section");

        console.log('scroll', this.scrollTop);
        this.active == true;
        for(var i= 0; i < section.length; i++){
          if(this.scrollTop > section[i].offsetTop - window.outerHeight/1.5 && this.scrollTop < section[i].offsetTop - window.outerHeight/1.5 + section[i].offsetHeight){
            this.pageNum = i;
            console.log(this.pageNum);
            
            break;
          }
        }
        this.pageChangeFunc();
      },

      pageChangeFunc(){
          const section = document.getElementsByTagName("section");
          // const inner = document.getElementsByTagName(".inner-wrap");
          const el = section[this.pageNum];
          // console.log(section[this.pageNum]);
          gsap.to(el, {
            duration: 1,
            y:0,
            opacity: 1,
            ease : 'bounce.out',
          })
        }
    }

}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';


.wave{
  width:100%;
}

section {
  overflow:hidden;
  position: relative;
  height: 100vh;
  width: 100vw;
  border-top: 1px dashed #333;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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