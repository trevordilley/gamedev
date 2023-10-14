import {Scene} from "phaser";
import {BackgroundFactory, CharacterFactory, RESOURCES} from "@gamedev/libs/resources/knight";

export class BaseScene extends Scene {
  knightFactory: CharacterFactory
  backgroundFactory: BackgroundFactory
  constructor() {
    super();
    const resources = RESOURCES(this, "http://localhost:3333/assets/resources")
    this.knightFactory = resources.KNIGHT()
    this.backgroundFactory = resources.OPEN_EXTERIOR()
  }

  preload() {
    this.knightFactory.load()
    this.backgroundFactory.load()
  }

  create() {
    this.backgroundFactory.create()
    this.cameras.main.setBounds(0,0,4096, 3072)
    this.knightFactory.create()
    this.knightFactory.add(50, 200).idle()
    this.knightFactory.add(150, 200).walk()
    this.knightFactory.add(250, 200).attack()
    this.knightFactory.add(50, 300).damaged()
    this.knightFactory.add(150, 300).dying()
  }
}
