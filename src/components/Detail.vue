<template>
    <SubHeader />

    <div class="sub-container">
        <Detail20 v-if="$route.params.id == '20'" />
    </div>
</template>

<script>
import SubHeader from './SubHeader'
import Detail20 from './Detail20'

export default {
    name : 'Detail',
    components: {
        SubHeader,
        Detail20,
    }
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.sub-container{
    padding: 3.5rem 1.66rem;
}

</style>