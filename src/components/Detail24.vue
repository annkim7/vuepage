<template>
    <div class="question-area">
        <div class="question-wrap">
            <div class="question-box">
                <div class="write">
                    <strong>From.</strong>
                    <input type="text" name="search-input" placeholder="이름">
                </div>
                <div class="write">
                    <strong>Position.</strong>
                    <ul class="radio-list">
                        <li>
                            <input type="radio" id="radio01">
                            <label for="radio01">회원</label>
                        </li>
                        <li>
                            <input type="radio" id="radio02">
                            <label for="radio02">비회원</label>
                        </li>
                    </ul>
                </div>
                <div class="write">
                    <strong>Question.</strong>
                    <textarea></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Detail24',
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.question-area{
    @include layout;
}

.radio-list{
    @include radio;
}

</style>