<script setup>
import {ref} from 'vue'
const btns = ref([
    {id: 0, name: 'cards', url: '/icons/cards.png', active: true},
    {id: 1, name: 'like', url: '/icons/like_indicator.png', active: false},
    {id: 2, name: 'message', url: '/icons/message.png', active: false},
    {id: 3, name: 'people', url: '/icons/people.png', active: false}
])

const changeActiveBtn = (id) => {
    btns.value.map((btn, i) => {
        btn.active = i === id;
    })
}
</script>

<template>
    <div class="sidebar">
        <div v-for="btn in btns" :key="btn.id" @click="changeActiveBtn(btn.id)" class="sidebar_btn " :class="[btn.active ? 'active' : '']">
            <img :src="btn.url" :alt="btn.name" />
        </div>
    </div>
</template>



<style scoped>
/* поменяй пж стили для класса active */
.sidebar {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.sidebar_btn {
    height: 48px;
    width: 60px;
    border: none;
    background: transparent;
}

.active {
    border-top: 2px solid var(--red-color);
}
</style>

