<template>
    <div class="blog_content">
        <div class="blog">
            <h2>{{ articleContent.articleTitle }}</h2>
            <div>
                {{ articleContent.articleContent }}
            </div>
        </div>

    </div>
</template>
<script setup>
import { ref } from 'vue'

defineProps({
    articleContent: Object,
})


</script>
<style scoped>
.h2{
    display: inline-block;
    padding: 20px 0;
}
</style>
