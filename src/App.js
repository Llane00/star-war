import { defineComponent, h } from '@vue/runtime-core'
import Circle from './components/Circle'

// defineeComponent 可以显示参数提示
export default defineComponent({
  render() {
    const vnode = h("rect", { x: 100, y: 100 }, [
      "hello",
      h(Circle)
    ])
    console.log(vnode)
    return vnode    
  }
})