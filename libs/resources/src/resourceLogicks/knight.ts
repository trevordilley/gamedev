import { Scene } from 'phaser';
import {PATHS} from "../PATHS";

export const knightResource = ( scene: Scene,baseUrl: string,id = "knight") => {
  const namespace = 'knight/anim';

  const frameRate = 8;

  const WALK_ANIM = `${namespace}/walk`;

  const ATTACK_ANIM = `${namespace}/attack`;

  return {
    load: () =>
      scene.load.spritesheet(
        id,
        PATHS(baseUrl).KNIGHT,
        { frameWidth: 64, frameHeight: 64 }
      ),
    create: () => {
      scene.anims.create({
        key: WALK_ANIM,
        frames: scene.anims.generateFrameNumbers(id, { start: 0, end: 6 }),
        frameRate,
        repeat: -1,
      });
      scene.anims.create({
        key: ATTACK_ANIM,
        frames: scene.anims.generateFrameNumbers(id, { start: 7, end: 10 }),
        frameRate,
        repeat: -1,
      });
    },
    add: (x: number, y: number) => {
      const knight = scene.add.sprite(x, y, id);
      return {
        knight,
        walk: () => knight.play(WALK_ANIM),
        attack: () => knight.play(ATTACK_ANIM),
      };
    },
  };
}
