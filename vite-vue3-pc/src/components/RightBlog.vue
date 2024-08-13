<template>
    <div class="blog_content">
        <div class="blog">
            <h2>纯前端实现图片切割,一键导出多张分割图片</h2>
            <div>关于脚手架的选择，其实也很多。

                官方提供的有Electron Forge，Electron Fiddle，electron-quick-start，其实如果你的应用不复杂，可以用官方的脚手架生成一个快速上手的模版，然后就可以愉快地开发了。

                当然也有一些开源的脚手架，比如electron-vue或vue-cli-plugin-electron-builder之类的，也可以让你快速的生成一个固定的模版，然后往里面填充你的内容。

                个人认为，官方的脚手架工具可以用来尝鲜，学习使用，electron-vue这类工具，如果是在一个企业级的项目中使用，前期会给你带来便利，但是后期扩展不会太友好，另外就是他们是基于webpack构建的工具，在日常的开发和使用中会觉得编译得不够快（相对于Vite）。

                另外就是如果你想自己完成一个项目脚手架（项目框架），完全可以凭借自己的经验或者参考开源项目的架构自己来完成一个脚手架，一来是为了更加了解Electron的构建原理，二来是可以在搭建项目的过程中去踩坑，总结经验，学习一门新的技术，我觉得很有必要自己来尝试造轮子，这样才能体会各种心酸历程。
            </div>
        </div>

    </div>
</template>
<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})


</script>
<style scoped>
.h2{
    display: inline-block;
    padding: 20px 0;
}
</style>
