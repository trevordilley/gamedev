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
    const knight = this.knightFactory.add(100, 200)
    knight.walk()
  }
}
