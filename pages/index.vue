<template>
    <div class="content">
        <div class="center">
            <div class="top">Dive deep into</div>
            <div class="main">Development</div>

            <div class="btns">
                <NuxtLink to="/projects" ><div class="btn">My Projects</div></NuxtLink>
                <div class="btn">About Me</div>
            </div>
        </div>
        <div class="footer">
            <a class="link" href="https://github.com/Nitwel" target="_blank"><img src="~~/public/github-bubble.svg"/></a>
            <a class="link" href="https://gitlab.com/Nitwel" target="_blank"><img src="~~/public/gitlab-bubble.svg"/></a>
            <a class="link" href="mailto:mail@nitwel.de" target="_blank"><img src="~~/public/mail-bubble.svg"/></a>
        </div>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: 'Nitwel.de'
})
</script>

<style lang="scss" scoped>
.center {
    margin: auto;
    color: var(--white);
    .top {
        font-size: 40px;
        font-weight: 300;
    }
    .main {
        font-weight: 300;
        font-size: 100px;
        text-transform: uppercase;
    }

    .btns {
        display: flex;
        justify-content: center;
        gap: 20px;
        color: var(--primary);
        font-size: 30px;
        margin-top: 40px;
        .btn {
            background-color: var(--white);
            border-radius: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px 40px;

        }
    }
}

.footer {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 10px;

    display: flex;
    gap: 20px;

    .link {
        transition: transform .3s cubic-bezier(.18,.89,.51,1.66);

        img {
            width: 90px;
        }

        &:hover {
            transform: scale(1.1);
        }
    }
}
</style>