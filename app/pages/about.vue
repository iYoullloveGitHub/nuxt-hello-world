<template>
  <div>
    <h1>关于页面</h1>
    <p>这也是一个支持 SSR 的页面！</p>
    
    <div>
      <h2>Nuxt 3 SSR 优势</h2>
      <ul>
        <li><strong>更好的 SEO</strong>: 搜索引擎可以直接抓取服务器渲染的内容</li>
        <li><strong>更快的首屏加载</strong>: 用户立即看到内容，无需等待 JavaScript 加载</li>
        <li><strong>更好的性能</strong>: 服务器分担了部分渲染工作</li>
        <li><strong>渐进式增强</strong>: 即使 JavaScript 禁用，页面仍可访问</li>
      </ul>
    </div>

    <nav>
      <NuxtLink to="/">返回首页</NuxtLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '关于 - Nuxt SSR Demo',
  description: '了解 Nuxt 3 SSR 的优势和特性'
})
</script>

<style scoped>
div {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
}

h1 {
  color: #2c5aa0;
  border-bottom: 2px solid #2c5aa0;
  padding-bottom: 0.5rem;
}

nav {
  margin-top: 2rem;
}

nav a {
  color: #2c5aa0;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #2c5aa0;
  border-radius: 4px;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: #2c5aa0;
  color: white;
}
</style>