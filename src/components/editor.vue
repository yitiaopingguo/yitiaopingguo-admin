<template>
    <div class="box details">
        <div class="title">
            <el-input v-model="title" placeholder="输入文章标题..."></el-input>
            <el-button>发布</el-button>
        </div>
        <Editor
            class="editos"
            :value="value"
            :plugins="plugins"
            :locale="zhHans"
            @change="handleChange"
        />
        <Viewer
            class="viewer"
            :tabindex="2"
            :sanitize="23"
            :value="value"
            :plugins="plugins"
            :locale="zhHans"
        ></Viewer>
    </div>
</template>

<script>
import { Editor, Viewer } from "@bytemd/vue";
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
import breaks from "@bytemd/plugin-breaks";
import frontmatter from "@bytemd/plugin-frontmatter";
import gemoji from "@bytemd/plugin-gemoji";
import zhHans from "bytemd/locales/zh_Hans.json";

const plugins = [
    breaks(),
    frontmatter(),
    gfm(),
    gemoji(),
    highlight(),
    // Add more plugins here
];

export default {
    components: { Editor, Viewer },
    data() {
        return {
            value: "",
            plugins,
            zhHans,
            title: "",
        };
    },
    methods: {
        handleChange(v) {
            this.value = v;
        },
    },
};
</script>
<style lang="scss" scoped>
.title {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 100%;
}
.box {
    position: relative;
    width: 500px;
    height: 100%;
    display: flex;
    justify-content: space-between;
}
.details {
    width: calc(100vw - 300px);
    height: calc(100% - 60px);
    padding-top: 80px;
    .editos {
        flex: 1;
        height: calc(100% - 60px);
        ::v-deep .bytemd {
            height: 100%;
            width: 100%;
        }
    }
    .viewer {
        padding: 20px 0 0 20px;
        background: #fff;
        height: calc(100% - 60px) !important;
        overflow: auto;
        flex: 1;
        .bytemd {
            width: 300px;
        }
    }
    .btn {
        flex-direction: row-reverse;
        margin: 20px;
        .el-button {
            margin-right: 20px;
        }
    }
}
</style>
