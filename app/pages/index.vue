<template>
  <div>
    <h1>Hello World with SSR!</h1>
    <p>当前时间: {{ currentTime }}</p>
    <p>页面路径: {{ $route.path }}</p>
    
    <div>
      <h2>Nuxt CSR 特性演示 (GitHub Pages)</h2>
      <ul>
        <li>✅ 客户端渲染 (CSR)</li>
        <li>✅ 自动路由</li>
        <li>✅ Vue 3 Composition API</li>
        <li>✅ TypeScript 支持</li>
        <li>✅ GitHub Pages 部署</li>
        <li>✅ 完全免费托管</li>
      </ul>
    </div>

    <nav>
      <NuxtLink to="/about">关于页面</NuxtLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
// 使用 ref 来避免 SSR 水合不匹配
const currentTime = ref('')

// 在客户端更新时间为当前时间
onMounted(() => {
  currentTime.value = new Date().toLocaleString('zh-CN')
})

// 服务器端渲染时显示静态文本
if (import.meta.server) {
  currentTime.value = '加载中...'
}

useSeoMeta({
  title: 'Hello World - Nuxt SSR Demo',
  description: '这是一个演示 Nuxt 3 SSR 功能的 Hello World 页面'
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