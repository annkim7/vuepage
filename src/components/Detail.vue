<template>
    <SubHeader />

    <div class="sub-container">
        <Detail00 v-if="$route.params.id == '00'" />
        <Detail01 v-if="$route.params.id == '01'" />
        <Detail02 v-if="$route.params.id == '02'" />
        <Detail10 v-if="$route.params.id == '10'" />
        <Detail11 v-if="$route.params.id == '11'" />
        <Detail20 v-if="$route.params.id == '20'" />
        <Detail21 v-if="$route.params.id == '21'" />
        <Detail22 v-if="$route.params.id == '22'" />
        <Detail23 v-if="$route.params.id == '23'" />
        <Detail24 v-if="$route.params.id == '24'" />
    </div>
</template>

<script>
import SubHeader from './SubHeader'
import Detail00 from './Detail00'
import Detail01 from './Detail01'
import Detail02 from './Detail02'
import Detail10 from './Detail10'
import Detail11 from './Detail11'
import Detail20 from './Detail20'
import Detail21 from './Detail21'
import Detail22 from './Detail22'
import Detail23 from './Detail23'
import Detail24 from './Detail24'

export default {
    name : 'Detail',
    components: {
        SubHeader,
        Detail00,
        Detail01,
        Detail02,
        Detail10,
        Detail11,
        Detail20,
        Detail21,
        Detail22,
        Detail23,
        Detail24
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