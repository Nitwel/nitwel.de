<template>
    <div class="content">
        <div class="title">My Projects</div>
        <div class="projects">
            <NuxtLink v-for="item in items" :key="item.id" class="project" :to="`/projects/${item.id}`">
                <img class="project-thumbnail" :src="getImage(item.thumbnail, {width: 400, height: 225})" />
                <div class="project-content">
                    <span class="project-title">{{item.name}}</span>
                    {{item.abstract}}
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { getImage } from '~~/util/image';
import { Project } from '~~/util/types';

useHead({
    title: 'Nils Twelker / Projects'
})

const { getItems } = useDirectusItems()

const items = await getItems<Project>({
    collection: "projects"
})


</script>

<style lang="scss" scoped>
.content {
    align-items: center;
    padding: 0 40px;

    .title {
        margin-top: 100px;
        margin-bottom: 40px;
        color: var(--white);
        font-size: 50px;
    }
}

.projects {
    display: grid;
    margin-bottom: 40px;
    grid-template-columns: repeat(auto-fill ,minmax(350px,1fr));
    gap: 20px;
    width: min(100%, 1000px);

    .project {
        background-color: var(--white);
        border-radius: var(--border-radius);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        color: var(--black);

        &-content {
            display: flex;
            flex-direction: column;
            padding: 15px 20px 20px 20px;
            border-top: 2px solid #f3f3f3;

            .project-title {
                font-size: 30px;
                margin-bottom: 15px;
            }
        }
    }
}
</style>