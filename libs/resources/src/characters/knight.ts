import { Scene } from 'phaser';
import {PATHS} from "../PATHS";
import {Character, CharacterFactory} from "../types";

export const knightResource = ( scene: Scene,baseUrl: string,id = "knight"): CharacterFactory => {
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
    add: (x?: number, y?: number): Character => {
      const knight = scene.add.sprite(x ?? 0, y ?? 0, id);
      return {
        sprite: knight,
        idle: () => knight.play(WALK_ANIM),
        walk: () => knight.play(WALK_ANIM),
        run: () => knight.play(WALK_ANIM),
        damaged: () => knight.play(WALK_ANIM),
        dying: () => knight.play(WALK_ANIM),
        dead: () => knight.play(WALK_ANIM),
        attack: () => knight.play(ATTACK_ANIM),
        casting: () => knight.play(ATTACK_ANIM),
        defending: () => knight.play(ATTACK_ANIM),
      };
    },
  };
}
