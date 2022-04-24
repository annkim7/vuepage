<template>
    <div class="introduce-area">
        <div class="introduce-wrap">
            <div class="introduce-box">
                <h4 class="title">The Title</h4>
                <p class="text">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.<br><br>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                </p>
            </div>
            <div class="video-box">
                <div class="video">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CZxKdgiisAU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p class="text">
                    by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. by Cicero are also reproduced in their exact original form, accompanied.
                </p>
            </div>
            <div class="counter">
                <div class="years">
                    <vue3-autocounter ref='counter' :startAmount='0' :endAmount='27' :duration='3'  separator=',' decimalSeparator='.' :decimals='0' :autoinit='true' />
                    <b>Years</b>
                </div>
                <div class="visitors">
                    <vue3-autocounter ref='counter' :startAmount='0' :endAmount='180000' :duration='3'  separator=',' decimalSeparator='.' :decimals='0' :autoinit='true' />
                    <b>Visitors</b>
                </div>
                <div class="brands">
                    <vue3-autocounter ref='counter' :startAmount='0' :endAmount='300' :duration='3'  separator=',' decimalSeparator='.' :decimals='0' :autoinit='true' />
                    <b>Brands</b>
                </div>
            </div>
            <div class="summary-box">
                <p class="text">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                </p>
            </div>
        </div>
    </div>



    <!-- <div class="abridge-box">
                <div class="abridge">
                    <ul class="abridge-list">
                        <li><b>title</b><span>Lorem Ipsum passage</span></li>
                        <li><b>date</b><span>Sections 1.10.32</span></li>
                        <li><b>summay</b><span>Lorem Ipsum passage</span></li>
                        <li class="innerLine">
                            <b>list</b>
                            <span>
                                <ul class="inner-list">
                                    <li>Lorem Ipsum passage</li>
                                    <li>Lorem Ipsum passage</li>
                                    <li>Lorem Ipsum passage</li>
                                    <li>Lorem Ipsum passage</li>
                                    <li>Lorem Ipsum passage</li>
                                </ul>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="check-box">
                <ul class="check-list">
                    <li>
                        <input type="checkbox" id="check01">
                        <label for="check01">체크!</label>
                    </li>
                    <li>
                        <input type="checkbox" id="check02">
                        <label for="check02">체크!</label>
                    </li>
                </ul>
            </div> -->
            <!-- <div class="radio-box">
                <ul class="radio-list">
                    <li>
                        <input type="radio" id="radio01">
                        <label for="radio01">
                            <em></em>
                            <span>radio 01</span>
                        </label>
                    </li>
                    <li>
                        <input type="radio" id="radio02">
                        <label for="radio02">
                            <em></em>
                            <span>radio 02</span>
                        </label>
                    </li>
                </ul>
            </div> -->
</template>

<script>
import { defineComponent } from 'vue';
import Vue3autocounter from 'vue3-autocounter';

export default defineComponent({
    name : 'Detail00',
    components: {
        'vue3-autocounter': Vue3autocounter
    },
});
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.introduce-area{
    @include layout;
}

.introduce-wrap{
    display:flex;
    flex-flow:row wrap;
    .text{
        line-height: 1.4;
        word-break: break-all;
    }
}

.introduce-box, .video-box{
    width:50%;
}

.introduce-box{
    .title{
        @include upTitle;
        margin-bottom:1.2rem;
        
    }
}

.video-box{
    padding-left: 2rem;
    .video{
        @include video;
        margin-top: 0.5rem;
        margin-bottom: 2rem;
    }
}


.counter{
    display:flex;
    width:100%;
    margin: 3.5rem 0;
    padding: 2.4rem 6rem;
    align-items: center;
    justify-content: space-between;
    border-top:1px solid #0e0e0e;
    border-bottom:1px solid #0e0e0e;
    span{
        font-size: 4.3rem;
        font-weight:600;
        color:#D1D1D1;
    }
    b{
        margin-top:0.8rem;
        text-align: center;
        font-size: 0.85rem;
    }
}



.abridge-box{
    margin-top:2rem;
}

.abridge-list{
    @include list(10rem);
    @include dotList;
}

.abridge-list .innerLine{
    @include innerDot;
    > b{
        height:1.3rem;
    }
    .inner-list{
        @include dashList;
    }
}


.check-list{
    @include check;
}


// .radio-list{
//     input[type=radio]{
//         display:none;
//     }
//     input[type=radio] + label{
//         position: relative;
//         em{
//             width: 100%;
//             height: auto;
//             padding: 1rem 0.3rem;
//             cursor:pointer;
//         }
//         span{
//             position: absolute;
//             top:0;
//             left:0;
//             text-align: center;
//             background: skyblue;
//         }
//     }
//     input[type=radio]:checked + label{
//         span{
//             background: blue;
//         }
//     }  
// }

@include tablet{
    .introduce-box, .video-box{
        width:100%;
    }

    .video-box{
        margin-top: 2rem;
        padding-left:0;
    }
}
</style>