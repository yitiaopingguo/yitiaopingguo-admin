<template>
  <div class="home">
    <Content v-if="listData.length>0" :listData="listData" />
  </div>
</template>

<script setup>
import { onMounted ,ref } from 'vue'
import Content from '@/components/Content.vue'
import axios from "axios";

const listData = ref([])
const getList = async () => {
  axios.get('/api/article/list').then(response => {
    listData.value = response.data.list
  })
}
onMounted(getList);
</script>

<style scoped>
.home {
  background: var(--bgColor);
  color: var(--color);
}
</style>
