<template>
    <div class="exhibition-area">
        <div class="exhibition-wrap">
            <div class="item-box">
                <ul class="item-list">
                    <li v-for="(item, i) in 8" :key="i" class="item" >
                        <div class="image">
                            <span class="img"><img src="https://images.unsplash.com/photo-1644550805208-54b031553153?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80"/></span>
                        </div>
                        <div class="summary">
                            <strong class="title">Lorem Ipsum</strong>
                            <span class="like">likes</span>
                            <p class="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Detail20',
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';


.item-list{
    display:flex;
    flex-flow: row wrap;
    li.item{
        max-width: calc((100% - 3rem)/4);
        margin-left: 1rem;
        border: 1px solid var(--default-color);

        &:nth-of-type(4n+1){
            margin-left:0;
        }
        &:nth-of-type(n+5){
            margin-top:1rem;
        }
    }
    
    
}


.summary{
    display:flex;
    flex-flow: row wrap;
    .title{width: 80%;}
    .like{width:20%;}
    .text{width:100%;}
}


</style>