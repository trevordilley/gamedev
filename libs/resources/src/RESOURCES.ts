import {Scene} from "phaser";
import {knightResource} from "./characters/knight";
import {openExteriorResources} from "./backgrounds/openExterior";


export const RESOURCES = (scene: Scene, baseUrl: string) => ({
  // NPCs
  KNIGHT: (id?: string) => knightResource(scene, baseUrl, id),
  OPEN_EXTERIOR: (id?: string) => openExteriorResources(scene, baseUrl, id),
})
