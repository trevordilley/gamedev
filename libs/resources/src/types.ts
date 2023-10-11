import Sprite = Phaser.GameObjects.Sprite;

export interface CharacterFactory {
  load: () => void
  create: () => void
  add: (x?: number, y?: number) => Character
}
export interface Character {
  sprite: Sprite,
    idle: () => void,
    walk: () => void,
    run: () => void,
    damaged: () => void,
    dying: () => void,
    dead: () => void,
    attack: () => void,
    casting: () => void,
    defending: () => void,
}
