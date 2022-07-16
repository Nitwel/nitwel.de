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

<style lang="scss" scoped>
.header {
    z-index: 10;
    position: fixed;
    padding: 20px;
    transition: all .4s var(--ease);
    transform-origin: 0px 0px;

    &.large {
        transform: scale(1.2);

        @media (max-width: 950px) {
            transform: scale(0.8);
        }
    }

    @media (max-width: 950px) {
        transform: scale(0.6);
    }

    .name {
        font-size: 40px;
        font-weight: 300;
        color: var(--primary);
    }

    .sub {
        font-size: 16px;
        font-weight: 300;
        color: var(--black);
    }

    .circle {
        z-index: -1;
        position: absolute;
        width: 500px;
        height: 500px;
        background-color: var(--white);
        border-radius: 50%;
        transform: translate(-34%, -76%);
        
        @media (max-width: 950px) {
            box-shadow: 0px 0px 6px 0px rgb(212, 212, 212);
        }
        
    }
}
</style>