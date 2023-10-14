import {Scene} from "phaser";
import {CharacterFactory, RESOURCES} from "@gamedev/libs/resources/knight";

export class BaseScene extends Scene {
  knightFactory: CharacterFactory
  constructor() {
    super();
    this.knightFactory = RESOURCES(this, "http://localhost:3333/assets/resources").KNIGHT()
  }

  preload() {
    this.knightFactory.load()
  }

  create() {
    this.knightFactory.create()
    this.knightFactory.add(50, 200).idle()
    this.knightFactory.add(150, 200).walk()
    this.knightFactory.add(250, 200).attack()
    this.knightFactory.add(50, 300).damaged()
    this.knightFactory.add(150, 300).dying()
  }
}
