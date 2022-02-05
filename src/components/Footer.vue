<template>
    <footer class="footer-wrap">
        <h1 class="logo"><img src="../assets/logo.png"/></h1>
        <address class="footer-box">
            <div class="footer">
                <div class="privacy">
                    <ul class="list bar">
                        <li>서비스안내</li>
                        <li>고객센터</li>
                        <li>서비스약관 및 정책</li>
                        <li>개인정보처리방침</li>
                    </ul>
                </div>
                <div class="infomation">
                    <ul class="list">
                        <li>주식회사 회사명</li>
                        <li>서울시 강남구 강남대로 0길 00-0</li>
                        <li>대표자 대표자</li>
                        <li>개인정보관리책임자 책임자</li>
                        <li>사업자등록번호 000-00-00000</li>
                        <li>TEL 00-0000-0000</li>
                        <li>FAX 00-0000-0000</li>
                        <li>E-MAIL 111@gmail.com</li>
                        <li>Copyright Ann Kim All Rights Reserved</li>
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
    display:flex;
}

.footer{
    display:flex;
    flex-flow: row wrap;
}

.privacy{
    width:100%;
}


</style>