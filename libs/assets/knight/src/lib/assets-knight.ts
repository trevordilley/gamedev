import {Scene} from "phaser"
import XHRSettingsObject = Phaser.Types.Loader.XHRSettingsObject;
import ImageFrameConfig = Phaser.Types.Loader.FileTypes.ImageFrameConfig;
export function assetsKnight(id: string ) {
    const namespace = "knight/anim"

    const frameRate = 8

    const WALK_ANIM = `${namespace}/walk`

    const ATTACK_ANIM = `${namespace}/attack`


    return {
      load: (scene: Scene,url?: string, frameConfig?: ImageFrameConfig, xhrSettings?: XHRSettingsObject) =>
        scene.load.spritesheet(id, url ?? "./assets/knight.png", frameConfig ?? {frameWidth: 36, frameHeight: 48}, xhrSettings),
      create: (scene: Scene) => {
        scene.anims.create({
          key: WALK_ANIM,
          frames: scene.anims.generateFrameNumbers(id, {start: 3, end: 6}),
          frameRate
        })
        scene.anims.create({
          key: ATTACK_ANIM,
          frames: scene.anims.generateFrameNumbers(id, {start: 7, end: 10}),
          frameRate
        })
      },
      add:(scene: Scene, x: number, y: number) => {
        const knight = scene.add.sprite(x, y, id)
        return {
          knight,
          walk: () => knight.play(WALK_ANIM),
          attack: () => knight.play(ATTACK_ANIM)
        }
      }
    }
}
