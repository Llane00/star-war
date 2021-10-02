import { createApp } from './src/runtime-canvas'
import App from "./src/App"
import { getContainer } from './src/Game'

createApp(App).mount(getContainer())