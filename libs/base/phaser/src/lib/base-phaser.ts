import { Game } from "phaser"
import GameConfig = Phaser.Types.Core.GameConfig;
export const DEFAULT_WINDOW_WIDTH = 800
export const DEFAULT_WINDOW_HEIGHT = 600
export const game = (config: GameConfig ) => new Game( {
  width: DEFAULT_WINDOW_WIDTH,
  height: DEFAULT_WINDOW_HEIGHT,
  ...config
})
