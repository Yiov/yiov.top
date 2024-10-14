<script setup lang="ts">
interface Props {
    url: string
    title: string
    description: string
    logo: string
}

const props = withDefaults(defineProps<Props>(), {
    url: '',
    title: '',
    description: '',
    logo: '',
})
</script>


<template>
    <div class="linkcard">
        <a :href="props.url" target="_blank">
            <p class="description">{{ props.title }}<br><span>{{ props.description }}</span></p>
            <div class="logo">
                <img alt="logo" width="70px" height="70px" :src="props.logo" />
            </div>
        </a>
    </div>
</template>

<style>
/* 卡片背景 */
.linkcard {
    background-color: var(--vp-c-bg-soft);
    border-radius: 8px;
    padding: 8px 16px 8px 8px;
    transition: transform 0.3s;
    margin-top: 20px;
}

/* 卡片鼠标悬停 */
.linkcard:hover {
    transform: translateY(-5px);
    background-image: linear-gradient(165deg, red, blue);
}


/* 链接样式 */
.linkcard a {
    display: flex;
    align-items: center;
}


/* 描述链接文字 */
.linkcard .description {
    flex-grow:1;
    font-weight: 500;
    font-size: 16px;
    line-height: 25px;
    color: var(--vp-c-text-1);
    margin: 0 0 0 16px;
}

/* 描述链接文字2 */
.linkcard .description span {
    font-size: 14px;
}

/* logo图片 */
.linkcard .logo img {
    width: 80px;
    object-fit: contain;
}

/* 链接下划线去除 */
.vp-doc a {
    text-decoration: none;
}
</style>