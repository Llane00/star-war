import { defineComponent, h, toRefs } from "@vue/runtime-core";
import heroImg from "../../assets/hero.png";

export default defineComponent({
  setup(props, ctx) {
    const { x, y } = toRefs(props)
    
    return {
      x,
      y
    }
  },
  render(ctx) {
    return h("Container",
      {x: ctx.x, y: ctx.y},
      [h("Sprite", { texture: heroImg, width: 107.5, height: 116 })]
    )
  }
})