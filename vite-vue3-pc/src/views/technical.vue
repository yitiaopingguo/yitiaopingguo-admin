<template>
    <div class="container">
        <div class="scrollable-content">
            <LeftTree v-if="categorizedArticles['1']" :categorizedArticles="categorizedArticles" @articleId="articleId">
            </LeftTree>
        </div>
        <div class="fixed-content">
            <RightBlog :articleContent="articleContent"></RightBlog>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import LeftTree from '@/components/LeftTree.vue'
import RightBlog from '@/components/RightBlog.vue'
import { withCategories, getArticle } from "@/api/user"

const listData = ref([])
const categorizedArticles = ref({});
const articleContent = ref({})
const getList = async () => {
    try {
        const res = await withCategories();
        if (res.code === 200) {
            listData.value = res.data
            categorizedArticles.value = transformArticles(listData.value)
        }
    } catch (error) {
        // 错误处理
        console.error("Error fetching hot tags:", error);
    }
}

const articleId = async (id) => {
    try {
        const res = await getArticle(id);
        if (res.code === 200) {
            articleContent.value = res.data
            console.log(res, 111);
        }
    } catch (error) {
        // 错误处理
        console.error("Error fetching hot tags:", error);
    }

}


//数组转换
const transformArticles = (articles) => {
    const result = [];
    const categoryMap = {};

    // 遍历文章，将它们添加到对应的分类中  
    articles.forEach(article => {
        if (!categoryMap[article.categoryId]) {
            categoryMap[article.categoryId] = {
                label: article.categoryName,
                children: []
            };
            result.push(categoryMap[article.categoryId]);
        }
        categoryMap[article.categoryId].children.push({ label: article.articleTitle, articleId: article.articleId });
    });

    return result;
};
onMounted(getList);
// return {
//     listData
// };  
</script>

<style scoped>
.container {
    padding-top: 60px;
    display: flex;
    height: 100%;
    overflow: hidden;
    /* 假设容器高度为视窗高度，根据需要调整 */
}

.scrollable-content {
    flex: 0 0 240px;
    /* 左侧固定宽度，不随内容增长而增长 */
    max-height: 800px;
    min-height: calc(100vh - 80px);
    overflow-y: auto;
    /* 垂直方向超出时显示滚动条 */
    background-color: lightblue;
    /* 背景色以便区分 */
    padding: 10px;
    /* 可选，增加内边距 */

}

.fixed-content {
    color: #000;
    flex-grow: 1;
    padding: 10px 50px;
    box-sizing: border-box;
    /* 右侧占据剩余空间 */
    background-color: rgb(252, 252, 252);
    max-height: 800px;
    overflow-y: auto;
    /* 背景色以便区分 */
    /* 可以根据需要设置padding, margin等 */
}
</style>