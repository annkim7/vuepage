<template>
    <SubHeader />

    <div class="sub-container">
        <Detail00 v-if="$route.params.id == '00'" />
        <Detail02 v-if="$route.params.id == '02'" />
        <Detail20 v-if="$route.params.id == '20'" />
    </div>
</template>

<script>
import SubHeader from './SubHeader'
import Detail00 from './Detail00'
import Detail02 from './Detail02'
import Detail20 from './Detail20'

export default {
    name : 'Detail',
    components: {
        SubHeader,
        Detail00,
        Detail02,
        Detail20,
    }
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.sub-container{
    padding: 3.5rem 1.66rem;
    background:#f9f9f9;
}

</style>