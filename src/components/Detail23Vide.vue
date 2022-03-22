<template>
    <SubHeader />
    <div class="videoDetail-area">
        <div class="videoDetail-wrap">
            <div class="videoDetail-box">
                <video muted autoplay controls poster="https://badathum.gscdn.kbs.co.kr/vod/2022/02/22/FS0056916_000718_1280.jpg">
                    <source src="https://badavod.gscdn.kbs.co.kr/service/detail/2022/02/22/MC0372224_002000.mp4?Expires=1647694233&amp;Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9iYWRhdm9kLmdzY2RuLmticy5jby5rci9zZXJ2aWNlL2RldGFpbC8yMDIyLzAyLzIyL01DMDM3MjIyNF8wMDIwMDAubXA0IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjQ3Njk0MjMzfX19XX0_&amp;Signature=KTJ9A3SCLZP2WINz8Rr4BhpU-amei0N5b5e3IJCIQVGDALNTkQEcC7UhcUBDq~kEbEWObQquEymyO9F73PWK~PD10DjUiQ3lNWrzbchYb6mdvw6Kk3BrGQ6PpATAFkpix5ASszhh-ekdKn4DWjAnWZeJhtJKt-KqcIzzWUK5o-87Bfj8~uIpGeRvmES~HfiiYRj03Dazb-yWqQ6~62~2wLwBRox3djq3RujsNM8okEOSGxSAQzvfZ1TSVNR5vK1VeiDyubf8fcIDGzwZyt5M5PsrKUSniQSkUMLucxzvnqR6YKRqk7Ybz72NxTssLrlu4SWaT19cBvm3wcsNFL5cag__&amp;Key-Pair-Id=APKAICDSGT3Y7IXGJ3TA" type="video/mp4">
                </video>
            </div>
            
        </div>
    </div>
</template>

<script>
import SubHeader from './SubHeader'

export default {
    name : 'Detail23Vide',
    components: {
        SubHeader,
    },
}
</script>

<style lang="scss" >
@import '../assets/style/root.scss';

.videoDetail-area{
    padding: 3.5rem 1.66rem;
    background:#f9f9f9;
}

.videoDetail-wrap{
    @include layout;
}

.videoDetail-box{
    @include videoSrc;
}
</style>