import kaboom from "kaboom";
import {knightSprite} from "@gamedev/libs/resources/knight";

const k = kaboom({global: false})

const knight = knightSprite(k, "http://localhost:3333/assets/resources")

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
