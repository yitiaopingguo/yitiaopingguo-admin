<template>
    <div class="header">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleSelect">
            <el-menu-item index="0">
                一条苹果
            </el-menu-item>
            <div class="flex-grow" />
            <el-menu-item index="1">主页</el-menu-item>
            <el-menu-item index="2">文章</el-menu-item>
            <el-sub-menu index="3">
                <template #title>我的</template>
                <el-menu-item index="3-2">退出</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="4">
                <template #title>更换颜色</template>
                <el-menu-item index="4-1" @click="handleChangeColor('default')">白色</el-menu-item>
                <el-menu-item index="4-2" @click="handleChangeColor('orange')">黑色</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}

const handleChangeColor = (color) =>{
    window.document.body.setAttribute('data-theme', color)
}
</script>

<style scoped>
.header {
    width: 100%;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 100;

    .el-menu {
        background-color: var(--bgColor);

    }

    .el-menu--horizontal>.el-menu-item {
        color: var(--Color) !important;
    }
    .el-menu--horizontal>.el-sub-menu .el-sub-menu__title{
        color: var(--Color) !important;
    }
}

.flex-grow {
    flex-grow: 1;
}
</style>
