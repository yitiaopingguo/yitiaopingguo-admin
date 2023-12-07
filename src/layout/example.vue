<!--
 * @Author: “chenjinwei” “507725948@qq.com”
 * @Date: 2023-10-26 14:09:02
 * @LastEditors: lucf 2572274368@qq.com
 * @LastEditTime: 2023-12-07 15:21:29
 * @FilePath: \vue2-template\vue2-template\src\layout\example.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="contain">
        <div class="leftContent">
            <RouterLink to="/example/test">测试</RouterLink>
            <!-- <RouterLink :to="{ name: 'exampleParams', params: { test: '123' } }"
                >路由params</RouterLink
            >
            <RouterLink :to="{ path: '/example/query', query: { test: '123' } }"
                >路由query</RouterLink
            > -->
        </div>
        <div class="rightContent">
            <RouterView />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.contain {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .leftContent {
        width: 200px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #000;
        padding: 20px 0;
        box-sizing: border-box;
    }
    .rightContent {
        display: flex;
        flex: 1;
    }
}
a {
    display: block;
    width: 100%;
    min-height: 50px;
    text-decoration: none;
    text-align: center;
    line-height: 50px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    &.router-link-active {
        font-weight: bold;
        font-size: 18px;
        background: #fff;
        color: #000;
    }
}
</style>
