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
                <div class="chart">
                    <apexchart height="350" :options="chartOptions2021" :series="series2021"></apexchart>
                </div>
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
                <div class="chart">
                    <apexchart height="350" :options="chartOptions2020" :series="series2020"></apexchart>
                </div>
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
                <div class="chart">
                    <apexchart height="350" :options="chartOptions2019" :series="series2019"></apexchart>
                </div>
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
                <div class="chart">
                    <apexchart type="line" height="350" :options="chartOptions2018" :series="series2018"></apexchart>
                </div>
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
import VueApexCharts from "vue3-apexcharts";

export default {
    name : 'Detail02',
    components: {
        apexchart: VueApexCharts,
    },
    data(){
        return{
            chartOptions2021: {
                chart: {
                    id : 'chart2021',
                    type: 'bar',
                },
                xaxis: {
                    categories: ['10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm'],
                },
                colors: ['#D3D3D3'],
            },
            series2021: [
                {
                    name: "series2021",
                    data: [60, 40, 20, 70, 86, 50, 30, 20],
                },
            ],
            chartOptions2020: {
                chart: {
                    id : 'chart2020',
                    type: 'line',
                },
                xaxis: {
                    categories: ['10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm'],
                },
                colors: ['#D3D3D3'],
            },
            series2020: [
                {
                    name: "series2020",
                    data: [80, 50, 10, 40, 26, 40, 30, 10],
                },
            ],
            chartOptions2019: {
                chart: {
                    id : 'chart2019',
                    type: 'area',
                    stacked: false,
                    zoom: {
                        type: 'x',
                        enabled: true,
                        autoScaleYaxis: true
                    },
                    toolbar: {
                        autoSelected: 'zoom'
                    },
                },
                xaxis: {
                    categories: ['10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm'],
                },
                colors: ['#D3D3D3'],
            },
            series2019: [
                {
                    name: "series2019",
                    data: [60, 70, 20, 30, 26, 15, 60, 10],
                },
            ],
            chartOptions2018: {
                chart: {
                    id : 'chart2018',
                    height: 350,
                    type: 'line',
                    stacked: false,
                },
                stroke: {
                    width: [0, 2, 5],
                    curve: 'smooth'
                },
                plotOptions: {
                    bar: {
                        columnWidth: '50%'
                    }
                },
                fill: {
                    opacity: [0.85, 0.25, 1],
                    gradient: {
                        inverseColors: false,
                        shade: 'light',
                        type: "vertical",
                        opacityFrom: 0.85,
                        opacityTo: 0.55,
                        stops: [0, 100, 100, 100]
                    }
                },
                labels: [
                    '01/01/2018', '02/01/2018', '03/01/2018', '04/01/2018', '05/01/2018', '06/01/2018', '07/01/2018',
                    '08/01/2018', '09/01/2018', '10/01/2018', '11/01/2018'
                ],
                markers: {
                    size: 0
                },
                xaxis: {
                    type: 'datetime'
                },
                yaxis: {
                    title: {
                        text: 'Points',
                    },
                    min: 0
                },
                tooltip: {
                    shared: true,
                    intersect: false,
                    y: {
                        formatter: function (y) {
                            if (typeof y !== "undefined") {
                                return y.toFixed(0) + " points";
                            }
                            return y;
                        }
                    }
                },
                colors: ['#D3D3D3','#dedede','#ccc'],
            },
            series2018: [
                {
                    name: 'TEAM A',
                    type: 'column',
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
                },
                {
                    name: 'TEAM B',
                    type: 'area',
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
                },
                {
                    name: 'TEAM C',
                    type: 'line',
                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
                }
            ],
        }
    }
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.history-area{
    @include layout;
}


.history-box{
    .title{
        @include upTitle;
        margin: 3.4rem 0;
    }
}


.history .list{
    @include list(10rem);
    margin-top:3.4rem;
    padding: 2rem 0;
    border-top: 1px solid #dedede;
    border-bottom: 1px solid #dedede;
    li{
        b{  
            height:2rem;
            padding:0.5rem 1.6rem 0.5rem 2rem;
            font-size: 0.95rem;
            font-weight:100;
            color:#0e0e0e;
            background: #dedede;
        }
        span{
            padding:0.3rem 0 0.4rem 1.6rem;
            font-size: 1rem;
        }
    }
    li ~ li{
        margin-top:1rem;
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
    margin: -0.5rem;
    li{
        min-width: 7rem;
        margin: 0.5rem;
        padding: 0.85rem 0.5rem;
        background: #fff;
        border-radius: 2rem;
        font-size: 0.85rem;
        text-align: center;
        cursor:pointer;
        box-shadow: 0 1px 4px 0 rgb(0 0 0 / 6%);
    }
    li.active{
        color: #0e0e0e;
        background: #dedede;
    }

}

@include mobile{
    .history{
        @include scrollX(767px);
    }
}

</style>