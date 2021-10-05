import { defineComponent, h } from "@vue/runtime-core";
import endImg from "../../assets/end.png";
import startImg from "../../assets/start.png";

export default defineComponent({
  setup(props, ctx) {
    const onClick = () => {
      ctx.emit("changePage", "EndPage")
    }

    return {
      onClick
    }
  },
  render(ctx) {
    return h("Container", [
      // "star war",
      // "restart game"
      h("Sprite", {texture: endImg, x: 0, y: 0, width: 320, height: 692.9}),
      // h("Sprite", {
      //   texture: startImg,
      //   x: 0,
      //   y: 200,
      //   width: 750,
      //   height: 375,
      //   interactive: true,
      //   onClick: ctx.onClick
      // })
    ])
  }
})