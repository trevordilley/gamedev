import {Scene} from "phaser";
import {knightResource} from "./resourceLogicks/knight";


export const RESOURCES = (scene: Scene, baseUrl: string) => ({
  // NPCs
  KNIGHT: (id?: string) => knightResource(scene, baseUrl, id),
  GOBLIN: (id?: string) => knightResource(scene, baseUrl, id),
  COMMONER: (id?: string) => knightResource(scene, baseUrl, id),

  // Doodads
  PINE: (id?: string) => knightResource(scene, baseUrl, id),
  BIG_TREASURE: (id?: string) => knightResource(scene, baseUrl, id),
  SNOW_BERRY_BUSH: (id?: string) => knightResource(scene, baseUrl, id),

  // Backgrounds
  CAVE: (id?: string) => knightResource(scene, baseUrl, id),
  WITCH_HUT: (id?: string) => knightResource(scene, baseUrl, id),
  CASTLE: (id?: string) => knightResource(scene, baseUrl, id),
})
