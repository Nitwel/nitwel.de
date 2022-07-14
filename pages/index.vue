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
        <div class="bubbles">
            <img src="/bubble.svg"/>
            <img src="/bubble.svg"/>
            <img src="/bubble.svg"/>
        </div>
        <div class="footer">
            <a class="link" href="https://github.com/Nitwel" target="_blank"><img src="/github-bubble.svg"/></a>
            <a class="link" href="https://gitlab.com/Nitwel" target="_blank"><img src="/gitlab-bubble.svg"/></a>
            <a class="link" href="mailto:mail@nitwel.de" target="_blank"><img src="/mail-bubble.svg"/></a>
        </div>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: 'Nils Twelker'
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

.bubbles {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    top: 50px;
    right: 100px;

    img {
        position: relative;
    }

    img:nth-child(1) {
        width: 200px;
        height: 200px;
        right: 10px;
        top: -20px;
        animation: 4s 500ms bubble infinite ease-in-out;
    }

    img:nth-child(2) {
        right: 100px;
        width: 150px;
        height: 150px;
        animation: 4500ms 1s bubble infinite ease-in-out;
    }

    img:nth-child(3) {
        right: 20px;
        width: 100px;
        height: 100px;
        animation: 3500ms 1s bubble infinite ease-in-out;
    }

    @keyframes bubble {
        50% {
            transform: translateY(20px);
        }
        100% {
            transform: translateY(0px);
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