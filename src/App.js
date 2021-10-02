import { defineComponent, h} from '@vue/runtime-core'

// defineeComponent 可以显示参数提示
export default defineComponent({
  render() {
    const vnode = h("div")
    console.log(vnode)
    return vnode    
  }
})