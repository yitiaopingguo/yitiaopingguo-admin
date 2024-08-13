<template>
    <div class="footer">
        <div class="footer-1">
            <span>Copyright</span>
            <span>2021-2024</span>
            <span>luchaofan</span>
        </div>
        <div class="footer-1">
            <span>赞赏</span>
            <span>反馈</span>
            <span>luchaofan</span>
        </div>
        <div class="footer-1">
            <span>域ICP备20240412号-1</span>
            <span>域ICP备20240412号-1</span>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>
<style scoped>
.footer{
    background: var(--bgColor);
    color: var(--color);
    width: 100%;
    height: 100px;
    text-align: center;
    border-top: 1px solid var(--border-color);
    align-items: center;
    margin-top: 20px;
    border-top: 1px solid #cfc8c8;
    padding-top: 20px;
    line-height: 30px;
    .footer-1{
        span{
            display: inline-block;
            margin-right: 10px;
        }
    }
    .footer-1 span:hover{
        color:coral;
    }
}
</style>
