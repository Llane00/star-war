import { defineComponent, h } from "@vue/runtime-core";
import background1Img from "../../assets/background_1.jpeg";

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
      h("Sprite", {
        texture: background1Img,
        x: 0,
        y: 0,
        width: 375,
        height: 812,
        interactive: true
      })
    ])
  }
})