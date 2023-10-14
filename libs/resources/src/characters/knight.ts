import { Scene } from 'phaser';
import {PATHS} from "../PATHS";
import {Character, CharacterFactory} from "../types";

export const knightResource = ( scene: Scene,baseUrl: string,id = "knight"): CharacterFactory => {
  const namespace = 'knight/anim';

  const frameRate = 8;

  const IDLE_ANIM = `${namespace}/idle`;
  const DAMAGE_ANIM = `${namespace}/damage`;
  const WALK_ANIM = `${namespace}/walk`;
  const DYING_ANIM = `${namespace}/dying`;
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
        key: IDLE_ANIM,
        frames: scene.anims.generateFrameNumbers(id, { start: 0, end: 3 }),
        frameRate,
        repeat: -1,
      });
      scene.anims.create({
        key: ATTACK_ANIM,
        frames: scene.anims.generateFrameNumbers(id, { start: 4, end: 13 }),
        frameRate,
        repeat: -1,
      });
      scene.anims.create({
        key: DAMAGE_ANIM,
        frames: scene.anims.generateFrameNumbers(id, { start: 9, end: 9 }),
        frameRate,
        repeat: -1,
      });
      scene.anims.create({
        key: WALK_ANIM,
        frames: scene.anims.generateFrameNumbers(id, { start: 14, end: 20 }),
        frameRate,
        repeat: -1,
      });
      scene.anims.create({
        key: DYING_ANIM,
        frames: scene.anims.generateFrameNumbers(id, { start: 21, end: 26 }),
        frameRate,
        repeat: -1,
      });
    },
    add: (x?: number, y?: number): Character => {
      const knight = scene.add.sprite(x ?? 0, y ?? 0, id);
      return {
        sprite: knight,
        idle: () => knight.play(IDLE_ANIM),
        walk: () => knight.play(WALK_ANIM),
        run: () => knight.play(WALK_ANIM),
        damaged: () => knight.play(DAMAGE_ANIM),
        dying: () => knight.play(DYING_ANIM),
        dead: () => console.warn("dead not implemented"),
        attack: () => knight.play(ATTACK_ANIM),
        casting: () => console.warn("casting not implemented"),
        defending: () => console.warn("defending not implemented"),
      };
    },
  };
}
