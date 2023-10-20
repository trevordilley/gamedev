import { PATHS } from '../PATHS';
import {KaboomCtx, SpriteCompOpt} from "kaboom";

export const openExteriorResources = ( k: KaboomCtx,id = "openExterior") => {

  k.loadSprite(id, "openExterior.png")

  return (opts?: SpriteCompOpt) => k.sprite(id, opts)
}
