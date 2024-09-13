export default {
  subApps: [
    {
      name: 'app-vue3', // 子应用名称，跟package.json一致
      entry: import.meta.env.DEV ? '//localhost:3001' : '/app-vue3/index.html', // 子应用入口，本地环境下指定端口
      container: '#sub-container', // 挂载子应用的dom
      activeRule: import.meta.env.DEV ? '/app/app-vue3' : '/app/app-vue3', // 路由匹配规则
      props: {} // 主应用与子应用通信传值
    },
    {
      name: 'app-react18', // 子应用名称，跟package.json一致
      entry: import.meta.env.DEV ? '//localhost:3002' : '/app-react18/index.html', // 子应用入口，本地环境下指定端口
      container: '#sub-container', // 挂载子应用的dom
      activeRule: import.meta.env.DEV ? '/app/app-react18' : '/app/app-react18', // 路由匹配规则
      props: {} // 主应用与子应用通信传值
    },
    {
      name: 'app-react18-vite', // 子应用名称，跟package.json一致
      entry: import.meta.env.DEV ? '//localhost:3003' : '/app-react18-vite/index.html', // 子应用入口，本地环境下指定端口
      container: '#sub-container', // 挂载子应用的dom
      activeRule: import.meta.env.DEV ? '/app/app-react18-vite' : '/app/app-react18-vite', // 路由匹配规则
      props: {} // 主应用与子应用通信传值
    }
  ]
}
