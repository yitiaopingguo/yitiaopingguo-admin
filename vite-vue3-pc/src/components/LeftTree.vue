<template>
    <div class="tree">
        <el-tree :data="dataTree" :props="defaultProps" default-expand-all="true" @node-click="handleNodeClick"></el-tree>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const props = defineProps({
    msg: String,
    categorizedArticles:Object
})
const emit = defineEmits(["articleId"]);
const defaultProps = ref({
    children: 'children',
    label: 'label'
})

const dataTree = ref(props.categorizedArticles)
const handleNodeClick= (data) => {
    emit("articleId",data.articleId)
}
</script>
<style scoped>
.tree{
    text-align: center;
    margin: auto auto;
    /deep/ .el-icon {
        opacity: 0;
    }
    /deep/ .el-tree-node{
        /* font-size: 16px;
        line-height: 28px; */
        color: rgba(60, 60, 67, .75);;
    }
}
</style>
