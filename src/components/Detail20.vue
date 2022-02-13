<template>
    <div class="exhibition-area">
        <div class="exhibition-wrap">
            <div class="item-box">
                <ul class="item-list">
                    <li v-for="(item, i) in $store.state.item" :key="i" class="item" >
                        <div class="image">
                            <span class="img"><img :src="item.img"/></span>
                        </div>
                        <div class="summary">
                            <strong class="title">{{item.title}}</strong>
                            <span @click="$store.commit('like')" class="like">
                                <font-awesome-icon :icon="['far', 'heart']" />
                                <!-- {{item.like}} -->
                                {{$store.state.like}}
                            </span>
                            <p class="text">{{item.text}}</p>
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
        padding-right: 0.5rem;
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
        width:100%;
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