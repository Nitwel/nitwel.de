<template>
    <div class="main">
        <NuxtLink to="/" class="header" :class="{large}">
            <div class="circle" />
            <div class="name">Nils Twelker</div>
            <div class="sub">Web Designer & Developer</div>
        </NuxtLink>
        <slot />
    </div>
</template>

<script lang="ts" setup>
const route = useRoute()

const large = computed(() => route.path === '/')
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

* {
    --primary: #49EEE8;
    --secondary: #2CE2C9;
    --black: #525252;
    --white: white;
    --border-radius: 5px;
    --ease: cubic-bezier(.18,.89,.32,1.28);
    font-family: 'Roboto', sans-serif;
}

body {
    margin: 0;
    background: linear-gradient(to bottom, var(--primary), var(--secondary));
}

.content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

a {
    text-decoration: none;
    color: inherit;
}
</style> 

<style lang="scss" scoped>
.header {
    z-index: 10;
    position: absolute;
    padding: 20px;
    transition: all .4s var(--ease);
    .name {
        font-size: 40px;
        font-weight: 300;
        color: var(--primary);
    }

    .sub {
        font-size: 16px;
        font-weight: 300;
        
    }

    .circle {
        z-index: -1;
        position: absolute;
        top: -360px;
        left: -150px;
        width: 500px;
        height: 500px;
        background-color: var(--white);
        border-radius: 50%;
        
    }

    &.large {

        transform: scale(1.3) translate(35px, 10px);
    }
}
</style>