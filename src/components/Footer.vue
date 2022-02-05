<template>
    <footer class="footer-wrap">
        <address class="footer-box">
            <h1 class="logo"><img src="../assets/logo.png"/></h1>
            <div class="footer">
                <div class="privacy">
                    <ul class="list">
                        <li>서비스안내</li>
                        <li>고객센터</li>
                        <li>서비스약관 및 정책</li>
                        <li>개인정보처리방침</li>
                    </ul>
                </div>
                <div class="information">
                    <ul class="list bar">
                        <li>주식회사 회사명</li>
                        <li>서울시 강남구 강남대로 0길 00-0</li>
                        <li>대표자 대표자</li>
                        <li>개인정보관리책임자 책임자</li>
                        <li>사업자등록번호 000-00-00000</li>
                        <li>TEL 00-0000-0000</li>
                        <li>FAX 00-0000-0000</li>
                        <li>E-MAIL 111@gmail.com</li>
                        <li class="copyright">Copyright Ann Kim All Rights Reserved</li>
                    </ul>
                </div>
            </div>
            
        </address>
    </footer>
</template>

<script>
export default {
    name : 'Footer',

}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.footer-wrap{
    color:#878787;
    background: #DDDDDD;
}

.footer-box{
    @include layout;
    display: flex;
    align-items: center;
}

.footer{
    display:flex;
    margin-left: 4rem;
    padding: 2.5rem 0;
    flex-flow: row wrap;
}

.footer .list.bar li:before{
    background: #878787;
}

.privacy{
    width:100%;
}

.privacy .list{
    li{
        font-size: 1.05rem;
    }
    li ~ li{
        padding-left: 2rem;
    }
}

.information{
    padding-top: 1.5rem;
}

.information .list{
    li{
        margin: 0.23rem 0;
        font-size: 0.95rem;
    }
    
}

.information .list.bar{
    li:nth-child(6){
        margin-left:0;
        padding-left:0;
    }
    li:nth-child(n+6){
        &:before{
            display:none;
        }
    }
    li.copyright{
        font-weight: 600;
    }
}

@include tablet{
    .footer-box{
        width:100%;
        padding: 5vw 1.5vw;
        flex-direction: column;
    }
    .footer-box .logo{
        max-width: 4vw;
        max-height: 4vw;
    }
    .footer{
        margin-top: 3vw;
        margin-left:0;
        padding:0;
    }
    .footer .list{
        justify-content: center;
    }
    .footer .list.bar li ~ li{
        margin-left: 1.5vw;
        padding-left: 1.5vw;
    }
    .privacy .list{
        li{
            font-size: 2vw;
        }
        li ~ li{
            padding-left: 2.5vw;
        }
    }
    .information{
        padding-top: 2vw;
    }
    .information .list.bar li{
        margin: 0.4vw 0;
        font-size: 1.8vw;
        &:nth-child(6){
            margin-left: 1.5vw;
            padding-left: 1.5vw;
        }
    }
    
}
</style>