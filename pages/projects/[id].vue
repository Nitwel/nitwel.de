<template>
    <div class="content">
        <img class="icon" :src="getImage(item.icon)" />
        <div class="title">{{item.name}}</div>
        <div class="text">
            <NuxtLink to="/projects" class="back"><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg></NuxtLink>
            <div v-html="renderedText"></div>
            <!-- <img class="project-thumbnail" :src="getImage(item.thumbnail, {width: 1000})" /> -->
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Project } from '~~/util/types';
import { getImage } from '~~/util/image';
import {marked} from 'marked'

const { getItemById } = useDirectusItems()
const route = useRoute()

const item = await getItemById<Project>({
    collection: "projects",
    id: route.params.id as string
}) as any as Project

useHead({
    title: `Nils Twelker / Projects / ${item.name}`
})

const renderedText = computed(() => marked.parse(item.content))
</script>

<style lang="scss" scoped>
.content {
    align-items: center;
    padding: 0 40px;

    .icon {
        margin-top: 100px;
        width: 200px;
    }

    .title {
        margin-top: 10px;
        margin-bottom: 20px;
        color: var(--white);
        font-size: 50px;
    }

    .back {
        position: absolute;
        bottom: calc(100% + 10px);
        left: 0;
        height: 36px;
        width: 36px;
        display: flex;
        fill: var(--white);
    }

    .text {
        position: relative;
        background-color: var(--white);
        padding: 20px;
        margin-bottom: 40px;
        border-radius: var(--border-radius);
        width: min(100%, 1000px);
        color: var(--black);

        ::v-deep(a) {
            color: var(--secondary);
        }

        ::v-deep(img) {
            max-width: 100%;
            box-shadow: 1px 1px 4px 0px rgb(198, 198, 198);
            margin: 5px 0;
            border-radius: var(--border-radius);
        }

        ::v-deep(video) {
            max-width: 100%;
            box-shadow: 1px 1px 4px 0px rgb(198, 198, 198);
            margin: 5px 0;
            border-radius: var(--border-radius);
        }
    }
}

</style>