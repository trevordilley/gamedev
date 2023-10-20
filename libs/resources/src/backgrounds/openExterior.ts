import { PATHS } from '../PATHS';
import {KaboomCtx, SpriteCompOpt} from "kaboom";

export const openExteriorResources = ( k: KaboomCtx,baseUrl: string,id = "openExterior") => {

  k.loadSprite(id, PATHS(baseUrl).OPEN_EXTERIOR)

  return (opts?: SpriteCompOpt) => k.sprite(id, opts)
}
