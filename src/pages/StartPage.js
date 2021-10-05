import { defineComponent, h } from "@vue/runtime-core";
import background0Img from "../../assets/background_0.png";
import startImg from "../../assets/start.png";

export default defineComponent({
  setup(props, ctx) {
    const onClick = () => {
      ctx.emit("changePage", "GamePage")
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
        texture: startImg,
        x: 0,
        y: 200,
        width: 750,
        height: 375,
        interactive: true,
        onClick: ctx.onClick
      })
    ])
  }
})