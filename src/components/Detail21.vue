<template>
    <div class="notice-area">
        {{$store.state.notice[0].title}}
    </div>
</template>

<script>
export default {
    name : 'Detail21',
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.notice-area{
    @include layout;
}

</style>