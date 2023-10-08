import {Scene} from "phaser";
import {knightResource} from "./resourceLogicks/knight";


export const RESOURCES = (scene: Scene, baseUrl: string) => ({
  KNIGHT: (id?: string) => knightResource(scene, baseUrl, id)
})
