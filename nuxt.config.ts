// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // GitHub Pages 部署配置
  app: {
    baseURL: '/nuxt-hello-world/', // GitHub Pages 子路径
    buildAssetsDir: '/_nuxt/',     // 静态资源路径
  }
})
