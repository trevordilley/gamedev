import Sprite = Phaser.GameObjects.Sprite;
import Image = Phaser.GameObjects.Image;

export interface Background {
  image: Image;
}

export interface BackgroundFactory {
  load: () => void;
  create: (width?: number, y?: number) => Background;
}
export interface CharacterFactory {
  load: () => void;
  create: () => void;
  add: (x?: number, y?: number) => Character;
}
export interface Character {
  sprite: Sprite;
  idle: () => void;
  walk: () => void;
  run: () => void;
  damaged: () => void;
  dying: () => void;
  dead: () => void;
  attack: () => void;
  casting: () => void;
  defending: () => void;
}
