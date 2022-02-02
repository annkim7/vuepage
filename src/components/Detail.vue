<template>
    <h3>{{$store.state.menu[$route.params.id.charAt(0)].bigTitle}}</h3>
    <p>{{$store.state.menu[$route.params.id.charAt(0)].subTitle[$route.params.id.charAt(1)]}}</p>
</template>

<script>
export default {
    name : 'Detail',

}
</script>

<style>

</style>