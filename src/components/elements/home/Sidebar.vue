<template>
    <div class="sidebar">
        <button id="cards_btn" class="sidebar_btn">
            <img src="/icons/cards.png" alt=""/>
        </button>

        <button id="like_indicator_btn" class="sidebar_btn">
            <img src="/icons/like_indicator.png" alt=""/>
        </button>

        <button id="message_btn" class="sidebar_btn">
            <img src="/icons/message.png" alt=""/>
        </button>

        <button id="people_btn " class="sidebar_btn">
            <img src="/icons/people.png" alt=""/>
        </button>
    </div>
</template>



<style scoped>
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

.sidebar_btn:active {
    border-top: 2px solid var(--red-color);
}
</style>

