

<template>
  <div id="app">
    <Header />
    <RouterView></RouterView>
    <!-- <Footer /> -->
  </div>
</template>
<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
//监听是否停在当前页面
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    document.title = '失联啦。。。'
  } else {
    document.title = '一条苹果'
  }
});

window.document.body.setAttribute('data-theme', 'default')
</script>
<style scoped></style>
