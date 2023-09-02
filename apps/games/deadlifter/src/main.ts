import {Game} from "phaser"

new Game({
  width: 800,
  height: 600,
  title: "Deadlifter",
  scene: {
    create: () => console.log("created")
  }
} )
