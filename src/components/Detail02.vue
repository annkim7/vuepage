<template>
    <div class="history-area">
        <div class="history-wrap">
            <div class="tab-box">
                <ul class="tab-list">
                    <li @click="$store.state.step = 0">2021</li>
                    <li @click="$store.state.step = 1">2020</li>
                    <li @click="$store.state.step = 2">2019</li>
                </ul>
            </div>
            <div v-if="$store.state.step == 0" class="history-box">
                <h4 class="title">The Title 2021</h4>
                <div class="information">
                    <ul class="list title">
                        <li><strong class="title">일시</strong><span class="text">2021. 10. 01(화) ~ 02(수) / 2일간</span></li>
                        <li><strong class="title">장소</strong><span class="text">KINTEX 제 1전시장 5홀</span></li>
                        <li><strong class="title">참관객</strong><span class="text">79379명</span></li>
                        <li><strong class="title">참가업체수</strong><span class="text">총 500개 업체 (1,800부스)</span></li>
                        <li><strong class="title">동시개최행사</strong><span class="text">글로벌 ESG 포럼 [주최 : 한국경제신문, 코엑스]</span></li>
                        <li><strong class="title">부대행사</strong><span class="text">2021 산업디지털 전환 컨퍼런스 외 200개 전문 컨퍼런스 세션</span></li>
                        <li><strong class="title">후원</strong><span class="text">환경부, 환경보전협회, 한국대기환경학회, 에코맘코리아, 미대촉, 경기도환경기술인협회, 경기도환경산업협회, 한국막학회, 한국냉동공조산업협회, 한국실내환경학회, 한국공기청정협회/연구조합, 대한의사협회, 한국환경보건학회</span></li>
                    </ul>
                </div>
            </div>
            <div v-if="$store.state.step == 1" class="history-box">
                <h4 class="title">The Title 2020</h4>
                <div class="information">
                    <ul class="list title">
                        <li><strong class="title">일시</strong><span class="text">2020. 10. 01(화) ~ 02(수) / 2일간</span></li>
                        <li><strong class="title">장소</strong><span class="text">KINTEX 제 1전시장 5홀</span></li>
                        <li><strong class="title">참관객</strong><span class="text">79379명</span></li>
                        <li><strong class="title">참가업체수</strong><span class="text">총 500개 업체 (1,800부스)</span></li>
                        <li><strong class="title">동시개최행사</strong><span class="text">글로벌 ESG 포럼 [주최 : 한국경제신문, 코엑스]</span></li>
                        <li><strong class="title">부대행사</strong><span class="text">2021 산업디지털 전환 컨퍼런스 외 200개 전문 컨퍼런스 세션</span></li>
                        <li><strong class="title">후원</strong><span class="text">환경부, 환경보전협회, 한국대기환경학회, 에코맘코리아, 미대촉, 경기도환경기술인협회, 경기도환경산업협회, 한국막학회, 한국냉동공조산업협회, 한국실내환경학회, 한국공기청정협회/연구조합, 대한의사협회, 한국환경보건학회</span></li>
                    </ul>
                </div>
            </div>
            <div v-if="$store.state.step == 2" class="history-box">
                <h4 class="title">The Title 2019</h4>
                <div class="information">
                    <ul class="list title">
                        <li><strong class="title">일시</strong><span class="text">2019. 10. 01(화) ~ 02(수) / 2일간</span></li>
                        <li><strong class="title">장소</strong><span class="text">KINTEX 제 1전시장 5홀</span></li>
                        <li><strong class="title">참관객</strong><span class="text">79379명</span></li>
                        <li><strong class="title">참가업체수</strong><span class="text">총 500개 업체 (1,800부스)</span></li>
                        <li><strong class="title">동시개최행사</strong><span class="text">글로벌 ESG 포럼 [주최 : 한국경제신문, 코엑스]</span></li>
                        <li><strong class="title">부대행사</strong><span class="text">2021 산업디지털 전환 컨퍼런스 외 200개 전문 컨퍼런스 세션</span></li>
                        <li><strong class="title">후원</strong><span class="text">환경부, 환경보전협회, 한국대기환경학회, 에코맘코리아, 미대촉, 경기도환경기술인협회, 경기도환경산업협회, 한국막학회, 한국냉동공조산업협회, 한국실내환경학회, 한국공기청정협회/연구조합, 대한의사협회, 한국환경보건학회</span></li>
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
    margin-top: 2rem;
    .title{
        margin-bottom:2rem;
        font-size: 2.5rem;
        font-weight: 600;
    }
}

.information{
    .list{
        @include list;
    }
}

.tab-list{
    display:flex;
    li{
        margin-left: -1px;
        padding: 1.2rem 2rem;
        border: 1px solid var(--default-color);
        background: var(--white);
    }
}

</style>