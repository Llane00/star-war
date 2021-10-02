import { Application } from "pixi.js"

//setup canvas
const game = new Application({
  width: 750,
  height: 1080
})

console.log(game)
document.body.append(game.view)

export function getContainer() {
  return game.stage
}