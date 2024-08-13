<template>
    <div class="list">
        <div class="list-item" v-for="item, index in listData" :key="index" @click="handleClickList">

            <div class="list-btm">
                <div class="list-top">
                    <img :src="item.img" alt="">
                </div>
                <p>
                    {{ item.title }}
                </p>
                <p>
                    {{ item.content }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    listData: Array,
})
console.log(props.listData, 333333);
const emit = defineEmits(["goDetail"]);
const arrList = ref([1, 2, 3, 4, 5])
const handleClickList = () => {
    emit("goDetail")
}

</script>

<style scoped>
.list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background-color: var(--bgColor);

    .list-item {
        height: 200px;
        width: 30%;
        margin: 0 10px;
        display: flex;
        /* align-items: center; */
        background: var(--bgColor);
        color: var(--color);
        border-radius: 20px;
        margin-bottom: 20px;
        padding: 10px 15px;
        box-sizing: border-box;
        box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);

        .list-top {
            text-align: left;
            img {
                display: inline-block;
                width: 50px;
                height: 50px;
                border-radius: 10px;
                object-fit: fill;
                transition: transform .2s ease-in-out;
            }
        }

        .list-btm {
            flex: 1;
            padding: 0 20px;
            box-sizing: border-box;
            text-align: left;

            p:nth-child(1) {
                font-size: 24px;
            }

            p:nth-child(2) {
                font-size: 14px;
            }
        }
    }

    .list-item:hover {
        transform: scale(1.01);
        transform: 2s;
    }
}
</style>
