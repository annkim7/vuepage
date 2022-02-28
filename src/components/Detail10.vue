<template>
    <div class="schedule-area">
        <span class="schedule-visual"><img src="../assets/schedule.png"/></span>
        <div class="schedule-wrap">
            <div class="schedule-header">
                <h4 class="date">12.25 <strong>Wed</strong></h4>
            </div>
            <div class="schedule-box">
                <span class="date">Abstract <strong>Seminar</strong></span>
                <ul class="schedule-list">
                    <li>test</li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name : 'Detail10',
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.schedule-area{
    @include layout;
    
}

.schedule-header{
    @include center;
    
}

.date{
    display:flex;
    position:relative;
    margin: 2rem 0;
    padding-top:1rem;
    font-family: 'Pretendard-Regular';
    font-size: 2rem;
    font-weight: 900;
    color: #0e0e0e;
    text-align: center;
    letter-spacing: -0.08rem;
    &:before{
        display:block;
        position:absolute;
        width:100%;
        height:3px;
        top:0;
        left:0;
        background: var(--key-color);
        content:'';
    }
    strong{
        margin-left:0.5rem;
        font-weight:100;
    }
}

.schedule-box{
    border-top: 1px solid #0e0e0e;
    .date{
        font-size: 1.6rem;
        margin: 1rem 0;
        padding-top:0;
        &:before{
            display:none;
        }
    }
}
</style>