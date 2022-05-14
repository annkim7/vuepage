<template>
    <div class="question-area">
        <div class="question-wrap">
            <div class="question-box">
                <div class="write">
                    <strong>From.</strong>
                    <div>
                        <input v-model="array.name" @keyup="wirteTxt" type="text" name="search-input" placeholder="이름">
                    </div>
                </div>
                <div class="write">
                    <strong>Position.</strong>
                    <div>
                        <ul class="radio-list">
                            <li v-for="(regist, i) in this.register" :key="i">
                                <input v-model="inputVal" type="radio" :id="`radio0`+i" :value="regist">
                                <label :for="`radio0`+i">{{regist}}</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="write">
                    <strong>Question.</strong>
                    <div>
                        <textarea v-model="array.content" @keyup="writeAreaTxt" placeholder="내용을 입력하세요"></textarea>
                    </div>
                </div>
                <div class="submit">
                    <span @click="submit" class="submit-btn">보내기</span>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-area" v-if="this.popOpen == true">
        <div class="modal-wrap">
            <span @click="this.close" class="close-btn"><font-awesome-icon :icon="['fa', 'times']" /></span>
            <div class="modal-header">
                <h4 class="title">{{this.array.name}}</h4>
                <span class="member">{{this.inputVal}}</span>
            </div>
            <div class="modal-content">{{this.array.content}}</div>
            <div class="modal-confirm">
                <span class="confirm-txt">이대로 전송하시겠습니까?</span>
                <span @click="confirm" class="confirm-btn">확인</span>
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
            array : [],
            popOpen : false,
        }
    },
    mounted(){
        this.array.push({ name: this.write, register: this.inputVal, content: this.writeArea });
    },
    methods: {
        wirteTxt(event){
            this.write = event.target.value;
        },
        writeAreaTxt(event){
            this.writeArea = event.target.value;
        },
        submit(){
            if(this.write == ''){
                alert('이름을 입력해주세요');
            }else if(this.inputVal == ''){
                alert('회원/비회원을 선택해주세요');
            }else if(this.writeArea == ''){
                alert('내용을 입력해주세요');
            }else{
                this.popOpen = true;
            }
            
        },
        close(){
            this.popOpen = false;
        },
        confirm(){
            alert('전달 완료되었습니다');
            setTimeout(()=>{
                this.popOpen = false;
            }, 600);
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
    margin:-0.6rem auto 0;
}

.write{
    display:flex;
    width:100%;
    margin-top:0.3rem;
    strong{
        width: 6rem;
        margin-top:0.8rem;
    }
    div{
        width:calc(100% - 6rem);
        input{
            width:14rem;
            height: 2rem;
            margin-top:0.3rem;
            padding: 0.8rem;
            border-radius: 0.5rem;
            box-shadow: 0 1px 4px 0 rgb(0 0 0 / 6%);
        }
        textarea{
            width:100%;
            height:10rem;
            margin-top:0.8rem;
            padding: 0.8rem;
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
    margin-top:0.8rem;
    li ~ li{
        margin-left:0.8rem;
    }
}

.modal-confirm{
    text-align: center;
    .confirm-txt{
        font-size: 1.1rem;
        font-weight: 500;
        color: #0e0e0e;
    }
    .confirm-btn{
        width:5rem;
        margin: 1rem auto 0;
        padding: 0.3rem;
        background: #D3D3D3;
        border-radius: 2rem;
        cursor: pointer;
        &:hover{
            color: var(--white);
            background: var(--key-color);
        }
    }
}


@include tablet{
    .write{
        flex-direction: column;
        div{
            width:100%;
            input{
                width:100%;
                margin-top:1rem;
            }
        }
    }
    
}
</style>