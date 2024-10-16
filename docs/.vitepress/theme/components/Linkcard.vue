<script setup lang="ts">
interface Props {
    title: string
    description: string
    url: string
    logo: string
}

const props = withDefaults(defineProps<Props>(), {
    title: '',
    description: '',
    url: '',
    logo: '',
})
</script>

<template>
    <section class="visland">
        <div class="vlist">
            <a :href="props.url">
                <div class="vlist-bg">
                    <div class="vlist-item">
                        <h1 class="h1">{{ props.title }}</h1>
                        <p class="description">{{ props.description }}</p>
                        <img width="60px" height="60px" :src="props.logo" style="pointer-events: none;">
                    </div>
                </div>
            </a>
        </div>
    </section>
</template>

<style scoped>
.visland {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    column-gap: 2rem;
    row-gap: 2rem;
    padding: 1rem 0;
}

.vlist {
    transition: transform 0.3s;
}

.vlist:hover {
    transform: translateY(-5px);
}

.vlist-bg {
    position: relative;
}


.vlist-item {
    display: flex;
    justify-content: center;
    border: 2px solid var(--custom-border);
    border-radius: .5rem;
    padding: 1.5rem 1rem;
    z-index: -1;
    height: 100px;
}

.vlist-item:hover {
    background-color: var(--custom-bg);
    border: 2px solid #4c75e1;
    border-radius: .5rem;
}



.vlist-item .h1 {
    position: absolute;
    top: 15px;
    left: 0px;
    margin: 0 16px;
    font-size: 18px;
    font-weight: 600;
    color: var(--vp-c-text-1);
}


.vlist-item .description {
    position: absolute;
    top: 15px;
    left: 2px;
    margin: 2.5rem 1rem;
    font-size: 13px;
    line-height: 20px;
    color: var(--vp-c-text-2);
    width: 65%;
}



.vlist-item img {
    border-radius: 1rem;
    position: absolute;
    right: 20px;
    top: 20px;
}

.vlist-bg:hover .vlist-item::before {
    content: "";
    background-image: linear-gradient(165deg, #4c75e1, #009bbd);
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(36px);
    z-index: -2;
    top: 0px;
    left: 0px;
}

.medium-zoom-overlay,
.medium-zoom-image {
    z-index: 0 !important;
}
</style>