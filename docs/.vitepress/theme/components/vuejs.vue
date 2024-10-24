<template>
  <section class="vcontainer">

    <!-- 标题 -->
    <h1 class="text">
      伊奥's <span>教程集</span>
    </h1>

    <!-- 描述 -->
    <div class="describe">
      <p>青，取之于蓝，而青于蓝；冰，水为之，而寒于水。 --荀子〔劝学〕</p>
    </div>

    <!-- 按钮 -->
    <div class="vactions">

      <!-- 主按钮 -->
      <div class="vaction">
        <a href="/guide/" class="primary">
          查看目录
          <svg viewBox="0 0 24 24" width="1.2em" height="1.2em"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
        </a>
      </div>

      <!-- 次按钮 -->
      <div class="vaction">
        <span class="vaction-bg"></span>
        <a href="/guide/todo" class="secondary">
          Todo
          <svg viewBox="0 0 24 24" width="1.2em" height="1.2em"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
        </a>
      </div>

    </div>

  </section>
</template>

<style scoped>
.vcontainer {
  display: flex;
  margin-top: 5rem;
  flex-direction: column;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
}

/* @media (min-width: 576px) {
  .vcontainer {
    margin-top: 9rem
  }
} */

/* @media (min-width: 992px) {
  .vcontainer {
    margin-bottom: 10rem
  }
} */


.vcontainer .text {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.25;
  max-width: 375px;
  text-align: center;
  color: var(--main-page-text);
}

@media (min-width: 576px) {
  .vcontainer .text {
    font-size: 60px;
    max-width: 480px;
  }
}

@media (min-width: 768px) {
  .vcontainer .text {
    font-size: 72px;
    max-width: 580px;
  }
}


.vcontainer .text span {
  color: transparent;
  background-clip: text;
  background-image: linear-gradient(to right, var(--main-page-from), var(--main-page-to));
}

.vcontainer .describe {
  color: var(--vp-c-text-2);
  margin-top: 2rem;
  text-align: center;
  font-size: 16px;
  line-height: 1.5rem;
  max-width: 360px;
  line-height: 1.625;
}

@media (min-width: 576px) {
  .vcontainer .describe {
    font-size: 24px;
    margin-top: 2.5rem;
    max-width: 480px;
    line-height: 2rem;
  }
}

@media (min-width: 768px) {
  .vcontainer .describe {
    max-width: 620px;
    line-height: 1.6;
    margin-top: 3rem;
  }
}


.vactions {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  display: flex;
}

@media (min-width: 992px) {
  .vactions {
    margin-top: 3rem
  }
}


.vaction {
  position: relative;
  z-index: 1;
  margin: 0 16px;
  border: 2px solid var(--main-page-text);
  border-radius: .5rem;
}

.vaction-bg:before {
  z-index: -2;
  position: absolute;
  content: " ";
  background-image: linear-gradient(165deg, var(--main-page-from), var(--main-page-to));
  filter: blur(40px);
  inset: 0;
}


.primary {
  display: flex;
  align-items: center;
  border-radius: .375rem;
  padding: .75rem 1.25rem;
  font-weight: 600;
  font-size: .875rem;
  line-height: 1.25rem;
  color: var(--main-page-bg);
  background-color: var(--main-page-text);
}



.secondary {
  display: flex;
  align-items: center;
  border-radius: .375rem;
  padding: .75rem 1.25rem;
  font-weight: 600;
  font-size: .875rem;
  line-height: 1.25rem;
  color: var(--main-page-text);
  background-color: var(--main-page-bg);
}


@media (min-width: 768px) {
  .vaction a {
    font-size: 1rem;
    line-height: 1.5rem
  }
}


.vaction a svg {
  width: 0px;
  transition-duration: .15s;
  margin-left: .3rem;
}


.vaction a:hover svg {
  width: 1rem;
  margin-left: .125rem;
}
</style>