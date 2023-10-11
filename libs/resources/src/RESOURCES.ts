import {Scene} from "phaser";
import {knightResource} from "./characters/knight";


export const RESOURCES = (scene: Scene, baseUrl: string) => ({
  // NPCs
  KNIGHT: (id?: string) => knightResource(scene, baseUrl, id),
})
