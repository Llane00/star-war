import { defineComponent, h, reactive } from "@vue/runtime-core";
import Map from "../components/Map"
import Hero from "../components/Hero"

export default defineComponent({
  setup(props, ctx) {
    //创建主角飞机
    const { heroInfo } = useHeroPlane()

    return {
      heroInfo
    }
  },
  render(ctx) {
    return h("Container", [
      h(Map),
      h(Hero, {x: ctx.heroInfo.x, y: ctx.heroInfo.y})
    ])
  },
})

function useHeroPlane() {
  const speed = 15;
  const heroInfo = reactive({ x: 100, y: 200 });

  window.addEventListener("keydown", (e) => {
    console.log(e, heroInfo);
    switch (e.code) {
      case "ArrowUp":
        heroInfo.y -= speed;
        break;
      case "ArrowDown":
        heroInfo.y += speed;
        break;
      case "ArrowLeft":
        heroInfo.x -= speed;
        break;
      case "ArrowRight":
        heroInfo.x += speed;
      default:
        break;
    }
  })

  return {
    heroInfo
  }
}