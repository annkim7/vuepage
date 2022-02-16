<template>
    <SubHeader />
    
    <div class="exhibitionDetail-area">
        <div class="exhibitionDetail-wrap">
            <div class="detail-box">
                <div class="picture">
                    <div class="image">
                        <span class="img"><img :src="$store.state.item[$route.params.id].img"/></span>
                    </div>
                </div>
                <div class="explain">
                    <div class="ex-header">
                        <span class="category">{{$store.state.item[$route.params.id].category}}</span>
                        <h4 class="title">{{$store.state.item[$route.params.id].title}}</h4>
                    </div>
                    <div class="ex-content">
                        <ul class="list">
                            <li><b>주소</b><span>{{$store.state.item[$route.params.id].address}}</span></li>
                            <li><b>대표자</b><span>{{$store.state.item[$route.params.id].ceo}}</span></li>
                            <li><b>전화</b><span>{{$store.state.item[$route.params.id].phone}}</span></li>
                            <li><b>이메일</b><span>{{$store.state.item[$route.params.id].email}}</span></li>
                            <li><b>SNS</b><span>{{$store.state.item[$route.params.id].sns}}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="text-box">
                <p>{{$store.state.item[$route.params.id].text}}</p>
            </div>
        </div>
    </div>
    
</template>

<script>
import SubHeader from './SubHeader'

export default {
    name : 'Detail20Exhi',
    components: {
        SubHeader,
    }
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';


.exhibitionDetail-area{
    padding: 3.5rem 0;
}

.detail-box{
    @include layout;
    display:flex;
    align-items: center;
    .picture{
        width: 35%;
        margin-right:5%;
        border: 1px solid var(--default-color);
        .img{
            @include imgFull;
        }
    }
    .explain{
        width: 60%;
    }
}

.ex-header{
    .category{
        margin-bottom: 0.4rem;
        font-size:0.95rem;
        color: #878787;
    }
    .title{
        margin-bottom: 1.8rem;
        font-size:1.8rem;
        font-weight:600;
    }
}

.ex-content{
    border-top: 1px solid var(--default-color);
    border-bottom: 1px solid var(--default-color);
}

.ex-content .list{
    flex-direction: column;
    li{
        display:flex;
        padding: 1rem 0;
        align-items: center;
        b{
            width:6rem;
            padding-left: 0.85rem;
            background: url('../assets/icon_arrow_gr.png') no-repeat left 0.1rem;
        }
        span{
            width: calc(100% - 6rem);
        }
    }
    li ~ li{
        border-top: 1px solid #cfcfcf;
    }
}

.text-box{
    margin:3rem 0 0;
    height: 18rem;
    border-top: 1px solid #cfcfcf;
    p{
        @include layout;        
        padding: 2rem 1.66rem;
    }
}
</style>