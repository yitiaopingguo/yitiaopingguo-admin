<template>
    <div class="content">
        <h1 class="title">
             一条苹果
        </h1>
        <div class="title-btm">博客博客博客</div>
        <el-row :gutter="22">
            <el-col :span="24">
                <div class="left-content">
                    <List v-if="listData.length>0" :listData="listData" @goDetail="goDetail" />
                </div>
            </el-col>
            <!-- <el-col :span="8">
                <div class="right-content">
                    <RightCard />
                </div>
            </el-col> -->
        </el-row>
    </div>

</template>

<script setup>
import { useRouter } from 'vue-router';
import List from '@/components/List.vue'
import RightCard from '@/components/RightCard.vue'
import { ref } from 'vue'

defineProps({
    listData: Array,
})

const activeIndex = ref('1')
const router = useRouter();

const goDetail = () => {
    router.push({
        name: "technical",
        query: '/technical'
    });
};
</script>

<style scoped>
.content {
    background: var(--bgColor);
    color: var(--color);
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 60px;
    max-width: 1200px;
    .title{
        display: inline-block;
        margin-top: 60px;
    }
    .title-btm{
        font-size: 30px;
        margin-bottom: 20px;
    }

    .left-content {
        padding: 20px;
        text-align: center;
    }

    .right-content {
        padding: 20px;
    }
}

.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}
</style>