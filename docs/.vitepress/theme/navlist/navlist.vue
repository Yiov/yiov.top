<script setup lang="ts">
import type { datas } from '../navlist/navtype'

defineProps<{
    items: datas[]
}>()
</script>

<template>
    <section class="visland">
        <div v-for="{ name, description, image, url, bdcolor, bgcolor, stars } in items" class="vlist">
            <a :href="url">
                <div class="vlist-bg">
                    <div class="vlist-item"
                        :style="'--border-color:' + bdcolor + ';' + '--background-color:' + bgcolor">
                        <span>{{ stars }}</span>
                        <h1 class="h1">{{ name }}</h1>
                        <p class="description">{{ description }}</p>
                        <img width="60px" height="60px" :src="image" style="pointer-events: none;">
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

@media (min-width: 576px) {
    .visland {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}


@media (min-width: 1200px) {
    .visland {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
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
}

.vlist-item:hover {
    background-color: var(--custom-bg);
    border: 2px solid var(--border-color);
    border-radius: .5rem;
}

.vlist-item  span {
    position: absolute;
    top: 3px;
    right: 5px;
    font-size: 14px;
}

.vlist-item .h1 {
    position: absolute;
    top: 10px;
    left: 0px;
    margin: 0 16px;
    font-size: 18px;
    font-weight: 600;
    color: var(--vp-c-text-1);
}


.vlist-item .description {
    position: absolute;
    top: 10px;
    left: 0px;
    margin: 2.5rem 1rem;
    font-size: 13px;
    line-height: 20px;
    color: var(--vp-c-text-2);
    width: 65%;
}


.vlist-item img {
    border-radius: 1rem;
    position: relative;
    left: 40%;
}

.vlist-bg:hover .vlist-item::before {
    content: "";
    background-image: linear-gradient(165deg, var(--border-color), var(--background-color));
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