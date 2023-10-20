import { KaboomCtx, SpriteCompOpt } from 'kaboom';

const anims = {
  idle: {
    from: 0,
    to: 3,
    loop: true,
  },
  attack: {
    from: 4,
    to: 13,
    loop: true,
  },
  damage: {
    from: 9,
    to: 9,
  },
  walk: {
    from: 14,
    to: 20,
    loop: true,
  },
  dying: {
    from: 21,
    to: 26,
    loop: true,
  },
} as const;

// refine the `play()` more so you can't make a typo
// type AllowedAnims = keyof typeof anims
export const knightSprite = (k: KaboomCtx, id = 'knight') => {
  k.loadSprite(id, 'knight.png', {
    sliceX: 27,
    sliceY: 1,
    anims,
  });

  return (opts?: SpriteCompOpt) => k.sprite(id, { anim: 'idle', ...opts });
};
