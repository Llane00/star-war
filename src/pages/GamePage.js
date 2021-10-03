import { defineComponent, h } from "@vue/runtime-core";
import Map from "../components/Map"

export default defineComponent({
  setup(props, ctx) {
    const onClick = () => {
      ctx.emit("changePage", "111")
    }

    return {
      onClick
    }
  },
  render(ctx) {
    return h("Container", [
      // "star war",
      // "start game"
      // h("Sprite", {texture: background0Img, x: 0, y: 0, width: 320, height: 692.9}),
      h(Map)
    ])
  }
})