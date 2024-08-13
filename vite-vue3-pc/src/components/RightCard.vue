<template>
    <div class="right-card">
        <div class="header-person">
            <div class="header-photo">
                <img src="https://image.fosunholiday.com/fostay-platform/test/086511b29db9ea874557a3d30b033df6.jpg"
                    alt="">
            </div>
            <div class="header-sort">
                <span>分类</span>
                <span>标签</span>
            </div>
        </div>
        <el-divider />
        <div>
            <div class="title">
                <el-icon>
                    <Menu />
                </el-icon><span>分类</span>
            </div>
            <div class="list-box">
                <div class="type-list" v-for="item, index in listType" :key="index">
                    <span>{{ item }}</span>
                    <span>{{ item }}</span>
                </div>
            </div>
        </div>
        <el-divider />
        <div>
            <div class="title">
                <el-icon>
                    <CollectionTag />
                </el-icon><span>标签</span>
            </div>
            <div>
                <el-tag v-for="item in items" :key="item.label" :type="item.type" effect="dark" class="tag-item">
                    {{ item.label }}
                </el-tag>
            </div>

        </div>
    </div>
</template>


<script setup>
import { Menu, CollectionTag } from '@element-plus/icons-vue'
import { ref } from 'vue'

defineProps({
    msg: String,
})

const listType = ref([1, 2, 3, 4, 5, 6])
const items = ref([
    { type: 'primary', label: 'Tag 1' },
    { type: 'success', label: 'Tag 2' },
    { type: 'info', label: 'Tag 3' },
    { type: 'warning', label: 'Tag 4' },
    { type: 'danger', label: 'Tag 5' },
])
</script>

<style scoped>
.right-card {
    background: var(--bgColor);
    color: var(--color);
    border-radius: 20px;
    padding: 20px;
    .header-person{
        text-align: center;
        .header-photo{
            img{
                height: 80px;
                width: 80px;
                border-radius: 50%;
            }
        }
        .header-sort{
            span{
                display: inline-block;
                padding: 0 20px;
                margin-top: 20px;
            }
            span:nth-child(1){
                border-right: 1px solid var(--color);
            }
        }
    }
    .title {
        margin-bottom: 15px;
        display: flex;
        align-items: center;
    }

    .list-box {
        background: var(--bgColor);
        color: var(--color);

        .type-list {
            display: flex;
            justify-content: space-between;
            height: 45px;
            width: 100%;
            margin-bottom: 15px;
            background: var(--bgColor);
            color: var(--color);
            box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.5s ease-in-out;
            border-radius: 5px;
            padding: 5px 10px;
            box-sizing: border-box;
            line-height: 35px;
        }

        .type-list:hover {
            transform: scale(1.03);
            box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.2);
        }
    }

    .tag-item {
        margin-right: 10px;
    }

}
</style>
