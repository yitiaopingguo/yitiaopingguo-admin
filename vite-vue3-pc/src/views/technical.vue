<template>
    <div class="container">
        <div class="scrollable-content">
            <LeftTree></LeftTree>
        </div>
        <div class="fixed-content">
            <RightBlog></RightBlog>
        </div>
    </div>
</template>

<script setup>
import LeftTree from '@/components/LeftTree.vue'
import RightBlog from '@/components/RightBlog.vue'

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
    max-height: 1000px;
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
    max-height: 1000px;
    overflow-y: auto;
    /* 背景色以便区分 */
    /* 可以根据需要设置padding, margin等 */
}
</style>