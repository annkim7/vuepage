<template>
    <SubHeader />
    <div class="videoDetail-area">
        <div class="videoDetail-wrap">
            <div class="videoDetail-box">
                <video muted autoplay controls :poster="$store.state.video[$route.params.id].poster">
                    <source :src="$store.state.video[$route.params.id].src" type="video/mp4">
                </video>
            </div>
            
        </div>
    </div>
</template>

<script>
import SubHeader from './SubHeader'

export default {
    name : 'Detail23Vide',
    components: {
        SubHeader,
    },
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.videoDetail-area{
    padding: 3.5rem 1.66rem;
    background:#f9f9f9;
}

.videoDetail-wrap{
    @include layout;
}

.videoDetail-box{
    @include videoSrc;
}
</style>