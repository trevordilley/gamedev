import kaboom from "kaboom";
import {knightSprite, openExteriorResources} from "@gamedev/libs/resources/knight";

const k = kaboom({global: false, width: 4096, height: 4096})

const knight = knightSprite(k, "http://localhost:3333/assets/resources")
const background = openExteriorResources(k, "http://localhost:3333/assets/resources")

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
