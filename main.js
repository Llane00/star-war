import { createApp } from './src/runtime-canvas'
import App from "./src/App"
import { getContainer } from './src/Game'

// App 根组件
// getContainer() 根容器
createApp(App).mount(getContainer())