<template>
    <div class="introduce-area">
        <div class="introduce-wrap">
            <div class="introduce-box">
                <h4 class="title">The Title</h4>
                <p class="text">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.<br><br>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
                </p>
            </div>
            <div class="video-box">
                <div class="video">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CZxKdgiisAU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <p class="text">
                    Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
            </div>
            <div class="abridge-box">
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
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Detail00',
}
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
    }
}

.introduce-box, .video-box{
    width:50%;
}

.introduce-box{
    .title{
        margin-bottom:2rem;
        font-size: 2.5rem;
        font-weight: 600;
    }
}

.video-box{
    padding-left: 2rem;
    .video{
        @include video;
        margin-bottom: 2rem;
    }
}


.abridge-box{
    margin-top:2rem;
}

.abridge-list{
    @include list;
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


.check-list input[type=checkbox]{display:none;}
.check-list input[type=checkbox] + label{display: inline-block;position: relative;padding-left: 1.5rem;font-size: 0.933rem; line-height: 1.25; color:#333; cursor: pointer;}
.check-list input[type=checkbox] + label:before{content:'';position: absolute;top:0; left:0; width: 1rem;height:1rem;border:1px solid #333;}
.check-list input[type=checkbox]:checked + label:before{background: #333;}

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