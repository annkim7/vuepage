<template>
    <div class="history-area">
        <div class="history-wrap">
            <div class="tab-box">
                <ul class="tab-list">
                    <li :class="{ active: $store.state.step == 0 }" @click="$store.state.step = 0">2021</li>
                    <li :class="{ active: $store.state.step == 1 }" @click="$store.state.step = 1">2020</li>
                    <li :class="{ active: $store.state.step == 2 }" @click="$store.state.step = 2">2019</li>
                    <li :class="{ active: $store.state.step == 3 }" @click="$store.state.step = 3">2018</li>
                </ul>
            </div>
            <div v-if="$store.state.step == 0" class="history-box">
                <h4 class="title">The Title 2021</h4>
                <div class="history">
                    <ul class="list">
                        <li><b>일시</b><span>2021. 10. 01(화) ~ 02(수) / 2일간</span></li>
                        <li><b>장소</b><span>KINTEX 제 1전시장 5홀</span></li>
                        <li><b>참관객</b><span>79379명</span></li>
                        <li><b>참가업체수</b><span>총 500개 업체 (1,800부스)</span></li>
                        <li><b>동시개최행사</b><span>글로벌 ESG 포럼 [주최 : 한국경제신문, 코엑스]</span></li>
                        <li><b>부대행사</b><span>2021 산업디지털 전환 컨퍼런스 외 200개 전문 컨퍼런스 세션</span></li>
                        <li><b>후원</b><span>환경부, 환경보전협회, 한국대기환경학회, 에코맘코리아, 미대촉, 경기도환경기술인협회, 경기도환경산업협회, 한국막학회, 한국냉동공조산업협회, 한국실내환경학회, 한국공기청정협회/연구조합, 대한의사협회, 한국환경보건학회</span></li>
                    </ul>
                </div>
            </div>
            <div v-if="$store.state.step == 1" class="history-box">
                <h4 class="title">The Title 2020</h4>
                <div class="history">
                    <ul class="list">
                        <li><b>일시</b><span>2020. 10. 01(화) ~ 02(수) / 2일간</span></li>
                        <li><b>장소</b><span>KINTEX 제 1전시장 5홀</span></li>
                        <li><b>참관객</b><span>79379명</span></li>
                        <li><b>참가업체수</b><span>총 500개 업체 (1,800부스)</span></li>
                        <li><b>동시개최행사</b><span>글로벌 ESG 포럼 [주최 : 한국경제신문, 코엑스]</span></li>
                        <li><b>부대행사</b><span>2021 산업디지털 전환 컨퍼런스 외 200개 전문 컨퍼런스 세션</span></li>
                        <li><b>후원</b><span>환경부, 환경보전협회, 한국대기환경학회, 에코맘코리아, 미대촉, 경기도환경기술인협회, 경기도환경산업협회, 한국막학회, 한국냉동공조산업협회, 한국실내환경학회, 한국공기청정협회/연구조합, 대한의사협회, 한국환경보건학회</span></li>
                    </ul>
                </div>
            </div>
            <div v-if="$store.state.step == 2" class="history-box">
                <h4 class="title">The Title 2019</h4>
                <div class="history">
                    <ul class="list">
                        <li><b>일시</b><span>2019. 10. 01(화) ~ 02(수) / 2일간</span></li>
                        <li><b>장소</b><span>KINTEX 제 1전시장 5홀</span></li>
                        <li><b>참관객</b><span>79379명</span></li>
                        <li><b>참가업체수</b><span>총 500개 업체 (1,800부스)</span></li>
                        <li><b>동시개최행사</b><span>글로벌 ESG 포럼 [주최 : 한국경제신문, 코엑스]</span></li>
                        <li><b>부대행사</b><span>2021 산업디지털 전환 컨퍼런스 외 200개 전문 컨퍼런스 세션</span></li>
                        <li>
                            <b>후원</b>
                            <span>
                                <ul class="inner-list dash">
                                    <li>환경부, 환경보전협회, 한국대기환경학회</li>
                                    <li>에코맘코리아, 미대촉, 경기도환경기술인협회</li>
                                    <li>경기도환경산업협회, 한국막학회, 한국냉동공조산업협회</li>
                                    <li>한국실내환경학회, 한국공기청정협회/연구조합, 대한의사협회, 한국환경보건학회</li>
                                </ul>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div v-if="$store.state.step == 3" class="history-box">
                <h4 class="title">The Title 2018</h4>
                <div class="history">
                    <ul class="list">
                        <li><b>일시</b><span>2018. 10. 01(화) ~ 02(수) / 2일간</span></li>
                        <li><b>장소</b><span>KINTEX 제 1전시장 5홀</span></li>
                        <li><b>참관객</b><span>79379명</span></li>
                        <li><b>참가업체수</b><span>총 500개 업체 (1,800부스)</span></li>
                        <li><b>동시개최행사</b><span>글로벌 ESG 포럼 [주최 : 한국경제신문, 코엑스]</span></li>
                        <li><b>부대행사</b><span>2021 산업디지털 전환 컨퍼런스 외 200개 전문 컨퍼런스 세션</span></li>
                        <li>
                            <b>후원</b>
                            <span>
                                <ul class="inner-list">
                                    <li>환경부, 환경보전협회, 한국대기환경학회</li>
                                    <li>에코맘코리아, 미대촉, 경기도환경기술인협회</li>
                                    <li>경기도환경산업협회, 한국막학회, 한국냉동공조산업협회</li>
                                    <li>한국실내환경학회, 한국공기청정협회/연구조합, 대한의사협회, 한국환경보건학회</li>
                                </ul>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Detail02',
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.history-area{
    @include layout;
}

.history-box{
    .title{
        @include lineTitle;
        margin: 3.4rem 0;
    }
}


.history .list{
    @include list;
    li{
        padding: 0.3rem 0;
        b{
            font-size: 1.1rem;
        }
        span{
            font-size: 1.1rem;
        }
    }
    li ~ li{
        margin-top:0.4rem;
    }
}

.history .inner-list{
    @include dotList;
    li{
        padding: 0 0 0 0.8rem;
    }
    li ~ li{
        border-top: 0;
    }
}

.history .inner-list.dash{
    @include dashList;
}


.tab-list{
    @include center;
    flex-flow: row wrap;
    li{
        min-width: 6rem;
        padding: 0.6rem 0.5rem;
        background: #D3D3D3;
        border-radius: 2rem;
        font-size: 0.8rem;
        text-align: center;
        cursor:pointer;
    }
    li.active{
        color: var(--white);
        background: var(--key-color);
    }
    li ~ li{
        margin-left: 0.5rem;
    }
}

@include mobile{
    .history{
        @include scrollX(767px);
    }
}

</style>