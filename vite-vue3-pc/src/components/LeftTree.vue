<template>
    <div class="tree">
        <el-tree :data="dataTree" :props="defaultProps" default-expand-all="true" @node-click="handleNodeClick"></el-tree>
    </div>
</template>
<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})

const defaultProps = ref({
    children: 'children',
    label: 'label'
})

const dataTree = ref([{
    label: '一级 1',
    children: [{
        label: '二级 1-1',
    }]
}, {
    label: '一级 2',
    children: [{
        label: '二级 2-1',
    }, {
        label: '二级 2-2',
    }]
}, {
    label: '一级 3',
    children: [{
        label: '二级 3-1',
    }, {
        label: '二级 3-2',
    }]
}])
const handleNodeClick= (data) => {
    console.log(data);
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
