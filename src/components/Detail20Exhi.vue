<template>
    <SubHeader />

    <div class="sub-container">
        <div class="exhibitionDetail-area">
            <div class="exhibitionDetail-wrap">
                <div class="detail-box">
                    <div class="img-box">
                        <div class="image">
                            <span class="img"><img :src="$store.state.item[$route.params.id].img"/></span>
                        </div>
                    </div>
                    <div class="explain">
                        <div class="information">
                            <ul class="list dot">
                                <li><strong class="title">일시</strong><span class="text">2021. 10. 01(화) ~ 02(수) / 2일간</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
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

.sub-container{
    padding: 3.5rem 1.66rem;
}

.exhibitionDetail-area{
    @include layout;
}

.detail-box{
    display:flex;
    .img-box{
        width: calc((100% - 4rem)/3);
        border: 1px solid var(--default-color);
    }
    .image{
        @include imgFull;
    }
}

</style>