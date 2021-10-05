import { defineComponent, h, reactive, onMounted, onUnmounted } from "@vue/runtime-core";
import Map from "../components/Map"
import Hero from "../components/Hero"
import Enemy from "../components/Enemy";
import { game } from "../Game";
import { hitTestObject } from "../utils";

export default defineComponent({
  setup(props, ctx) {
    //创建主角飞机
    const { heroInfo } = useHeroPlane()

    //创建敌人
    const { enemyList } = useEnemyPlanes();

    const handleTicker = () => {
      //主循环
      enemyList.forEach((enemyInfo) => {
        enemyInfo.y += 2;
      })

      //碰撞检测
      enemyList.forEach((enemyInfo) => {
        if (hitTestObject(enemyInfo, heroInfo)) {
          console.log("hit")
          ctx.emit("changePage", "EndPage");
        }
      })
    }

    onMounted(() => {
      game.ticker.add(handleTicker)
    })

    onUnmounted(() => {
      game.ticker.remove(handleTicker)
    })

    return {
      heroInfo,
      enemyList
    }
  },
  render(ctx) {
    const createEnemyList = () => {
      return ctx.enemyList.map((enemyInfo) => {
        return h(Enemy, { x: enemyInfo.x, y: enemyInfo.y })
      });
    };

    return h("Container", [
      h(Map),
      h(Hero, { x: ctx.heroInfo.x, y: ctx.heroInfo.y }),
      ...createEnemyList()  
    ])
  },
})

function useEnemyPlanes() {
  //创建敌方飞机
  const enemyList = reactive([
    {
      x: 25,
      y: 0,
      width: 102.5,
      height: 104,
    },
    {
      x: 200,
      y: 50,
      width: 102.5,
      height: 104,
    },
    {
      x: 325,
      y: 0,
      width: 102.5,
      height: 104,
    },
    {
      x: 400,
      y: 200,
      width: 102.5,
      height: 104,
    },
    {
      x: 525,
      y: 100,
      width: 102.5,
      height: 104,
    },
  ])

  return { enemyList };
}

function useHeroPlane() {
  const speed = 15;
  const heroInfo = reactive({ x: 325, y: 900, width: 107.5, height: 116 });

  window.addEventListener("keydown", (e) => {
    // console.log(e, heroInfo);
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