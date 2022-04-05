<template>
    <div class="question-area">
        <div class="question-wrap">
            <div class="question-box">
                <div class="write">
                    <strong>From.</strong>
                    <div>
                        <input :value="write" @keyup="wirteTxt" type="text" name="search-input" placeholder="이름">
                    </div>
                </div>
                <div class="write">
                    <strong>Position.</strong>
                    <div>
                        <ul class="radio-list">
                            <li v-for="(regist, i) in this.register" :key="i">
                                <input v-model="inputVal" type="radio" :id="`radio0`+i" :value="i">
                                <label :for="`radio0`+i">{{regist}}</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="write">
                    <strong>Question.</strong>
                    <div>
                        <textarea :value="writeArea" @keyup="writeAreaTxt"></textarea>
                    </div>
                </div>
                <div class="submit">
                    <span class="submit-btn">보내기</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Detail24',
    data(){
        return{
            write : '',
            writeArea : '',
            register: ['회원', '비회원'],
            inputVal : [],
        }
    },
    methods: {
        wirteTxt(event){
            this.write = event.target.value;
            console.log(this.write);
        },
        writeAreaTxt(event){
            this.writeArea = event.target.value;
            console.log(this.writeArea);
        }
    }
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.question-area{
    @include layout;
}

.question-box{
    margin:-1rem auto 0;
}

.write{
    display:flex;
    width:100%;
    margin-top:1rem;
    strong{
        width: 6rem;
        margin-top:0.8rem;
    }
    div{
        width:calc(100% - 6rem);
        input{
            width:14rem;
            height: 2.5rem;
            padding: 0.3rem;
            border-radius: 0.5rem;
            box-shadow: 0 1px 4px 0 rgb(0 0 0 / 6%);
        }
        textarea{
            width:100%;
            height:10rem;
            margin-top:0.4rem;
            padding: 0.3rem;
            border-radius: 0.5rem;
            box-shadow: 0 1px 4px 0 rgb(0 0 0 / 6%);
        }
    }
}

.submit{
    display:flex;
    justify-content: center;
    margin-top: 3rem;
    .submit-btn{
        padding: 0.6rem 1.3rem;
        background: #D3D3D3;
        border-radius: 2rem;
        cursor: pointer;
        &:hover{
            color: var(--white);
            background: var(--key-color);
        }
    }
}

.radio-list{
    @include radio;
    display:flex;
    height: 2.5rem;
    align-items: center;
    li ~ li{
        margin-left:0.8rem;
    }
}

</style>