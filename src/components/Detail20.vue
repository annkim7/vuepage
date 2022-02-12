<template>
    <div class="exhibition-area">
        <div class="exhibition-wrap">
            <div class="item-box">
                <ul class="item-list">
                    <li v-for="(item, i) in 9" :key="i" class="item" >
                        <div class="image">
                            <span class="img"><img src="https://images.unsplash.com/photo-1628834673318-62bd8be938c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"/></span>
                        </div>
                        <div class="summary">
                            <strong class="title">Lorem Ipsum Lorem Ipsum Lorem Ipsum</strong>
                            <span class="like">
                                <font-awesome-icon :icon="['far', 'heart']" />
                                33
                            </span>
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

.exhibition-area{
    @include layout;
}

.item-list{
    @include gallary(2rem,3);
    li{
        border: 1px solid var(--default-color);
    }
    .image{
        @include imgFull;
    }
}

.summary{
    display:flex;
    padding: 1.2rem;
    flex-flow: row wrap;
    align-items: center;
    border-top: 1px solid var(--default-color);
    .title{
        @include ellipse;
        flex: 1 1 0;
        font-weight: 900;
    }
    .like{
        display:flex;
        align-items: center;
        flex-shrink: 0;
        font-size: 0.9rem;
        svg{
            margin-right: 0.3rem;
        }
    }
    .text{
        @include ellipseBox(2rem,2);
        margin-top:1rem;
    }
}

@include tablet{
    .item-list{
        @include gallary(2rem,2);
    }
}

@include mobile{
    .item-list{
        @include gallary(2rem,1);
    }
}

</style>