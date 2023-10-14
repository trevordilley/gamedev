import {Scene} from "phaser";
import { Background, BackgroundFactory, Character, CharacterFactory } from '../types';
import { PATHS } from '../PATHS';

export const openExteriorResources = ( scene: Scene,baseUrl: string,id = "openExterior"): BackgroundFactory => {
  return {
    load: () =>
      scene.load.image(
        id,
        PATHS(baseUrl).OPEN_EXTERIOR,
      ),
    create: (width = 4096, height = 3072) : Background => {
      const image = scene.add.image(0,0,id)
      image.setOrigin(0)
      scene.cameras.main.setBounds(0,0,width, height)
      return {
        image,
      };
    },
  };
}
