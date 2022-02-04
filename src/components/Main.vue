<template>
  <div class="wave">
    <svg class="editorial" viewbox="0 24 150 28" preserveaspectratio="none">
        <defs>
            <path id="gentle-wave"
            d="M-160 44c30 0 
            58-18 88-18s
            58 18 88 18
            58-18 88-18
            58 18 88 18" />
        </defs>
        <g class="parallax" fill="none" >
            <use xlink:href="#gentle-wave" x="50" y="0" stroke="#4579e2"/>
            <use xlink:href="#gentle-wave" x="50" y="3" stroke="#3461c1"/>
            <use xlink:href="#gentle-wave" x="50" y="6" stroke="#2d55aa"/>
        </g>
    </svg>
  </div>
</template>

<script>
export default {
    name : 'Main',

}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.wave{overflow:hidden; max-height:100vh; margin:0; padding:9em 0 0 0; background:#234;}
.editorial{display:block;width:100%;height:10em;max-height:100vh; border:1px solid red;}

        // .parallax > use{animation: move-forever 12s linear infinite;}
        // .parallax > use:nth-child(1){animation-delay: -2s;}
        // .parallax > use:nth-child(2){animation-delay: -2s;animation-duration: 5s;}
        // .parallax > use:nth-child(3){animation-delay: -4s;animation-duration: 3s;}
        // @keyframes move-forever{
        //     0%{transform: translate(-90px, 0%);}
        //     100%{transform: translate(85px, 0%);}
        // }

</style>