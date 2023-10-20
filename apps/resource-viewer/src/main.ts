import {knightSprite, openExteriorResources} from "@gamedev/libs/resources/knight";
import { game } from "@gamedev/libs/kaboom/game"
import {KaboomCtx} from "kaboom";

const run = (k: KaboomCtx) => {
  const knight = knightSprite(k )
  const background = openExteriorResources(k)

  k.add([background()])
  k.add([
    k.pos(24, 24),
    knight(),
  ])

  k.add([
    k.pos(104, 24),
    knight({anim: "walk"}),
  ])

  k.add([
    k.pos(204, 24),
    knight({anim: "dying"}),
  ])
}

game({
  resourceUrl: "http://localhost:3333/assets/resources/",
  run
})

