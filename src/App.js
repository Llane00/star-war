import { defineComponent, h, computed, ref } from '@vue/runtime-core'
import StartPage from './pages/StartPage'
import GamePage from './pages/GamePage'
import EndPage from './pages/EndPage'

// defineeComponent 可以显示参数提示
export default defineComponent({
  setup(props, ctx) {
    const currentPageName = ref("StartPage");

    const currentPage = computed(() => {
      if (currentPageName.value === "StartPage") {
        return StartPage
      } else if (currentPageName.value === "GamePage") {
        return GamePage
      } else if (currentPageName.value === "EndPage") {
        return EndPage
      }
    })

    return {
      currentPageName,
      currentPage
    }
  },
  render(ctx) {
    const vnode = h("Container", [
      h(ctx.currentPage, {
        onChangePage(page) {
          ctx.currentPageName = page
        }
      })
    ])
    return vnode    
  }
})