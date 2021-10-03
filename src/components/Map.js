import { defineComponent, h, ref } from "@vue/runtime-core";
import { game } from "../Game"
import mapImg from "../../assets/background_1.jpeg";

export default defineComponent({
  setup() {
    const viewHeight = 1080;
    const mapY1 = ref(0);
    const mapY2 = ref(-viewHeight)

    const speed = 5;
    game.ticker.add(() => {
      mapY1.value += speed;
      mapY2.value += speed;

      mapY1.value = mapY1.value >= viewHeight ? -viewHeight : mapY1.value;
      mapY2.value = mapY2.value >= viewHeight ? -viewHeight : mapY2.value;
    })

    return {
      mapY1,
      mapY2
    }
  },
  render(ctx) {
    return h("Container", [
      h("Sprite", { texture: mapImg, y: ctx.mapY1, width: 750, height: 1388}),
      h("Sprite", { texture: mapImg, y: ctx.mapY2, width: 750, height: 1388})
    ])
  }
})