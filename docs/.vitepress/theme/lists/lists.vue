<script setup lang="ts">
import type { datas } from './type'

defineProps<{
    title?: string
    items: datas[]
}>()
</script>

<template>
    <h3 class="vtitle">{{ title }}
        <!-- <a class="header-anchor" :href="`#${title}`"></a> -->
    </h3>
    <section class="visland">
        <div v-for="{ url, image, name, bdcolor, bgcolor , stars } in items" class="vlist">
            <a :href="url">
                <div class="vlist-bg">
                    <div class="vlist-item" :style="'--border-color:' + bdcolor + ';' + '--background-color:' + bgcolor">
                        <span>{{ stars }}</span>
                        <img width="60px" height="60px" :src="image" style="pointer-events: none;">
                    </div>
                </div>
            </a>
            <div class="text">{{ name }}</div>
        </div>
    </section>
</template>

<style scoped>
.vtitle {
    font-size: 20px;
    font-weight: 600;
}
.visland {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 2.5rem;
    row-gap: 2.5rem;
    padding-bottom: 2rem;
    padding-top: 1rem;
}

@media (min-width: 576px) {
    .visland {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}


@media (min-width: 1200px) {
    .visland {
        grid-template-columns: repeat(6, minmax(0, 1fr));
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
    padding: 2rem 0;
    z-index: -1;
}

.vlist-item:hover {
    background-color: var(--custom-bg);
    border: 2px solid var(--border-color);
    border-radius: .5rem;
}

.vlist-item span{
    position: absolute;
    top: 1px;
    left: 3px;
    font-size: 13px;
}

.vlist-item img{
    border-radius: 1rem;
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


.vlist .text {
    text-align: center;
    padding-top: .75rem;
    font-size: .875rem;
    line-height: 1.25rem;
    font-weight: 500;
    color: var(--custom-text);
}

.medium-zoom-overlay,.medium-zoom-image {
  z-index: 0 !important;
}
</style>