import { defineComponent, h, toRefs } from "@vue/runtime-core";
import enemyImg from "../../assets/enemy_0.png";

export default defineComponent({
  setup(props, ctx) {
    const { x, y } = toRefs(props)
    
    return {
      x,
      y
    }
  },
  render(ctx) {
    return h("Container", {x: ctx.x, y: ctx.y},
      [h("Sprite", { texture: enemyImg, width: 102.5, height: 104 })]
    )
  }
})