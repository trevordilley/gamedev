import React, {Component, PropsWithChildren} from "react";
import {Game} from "phaser"
import _ from "lodash";
const hostElementId = "game"

export interface GameProps {
  config: Phaser.Types.Core.GameConfig
}

export const Phaser = (props: PropsWithChildren<GameProps>) => {

  const {config, children} = props
  return (<>
    <GameGui config={config}>
      {children}
    </GameGui>
    <GameContainer config={config}/>
  </>)
}

const GameGui = (props: PropsWithChildren<GameProps>) => {

  const {config, children} = props

  return (
    <div
      id={`${hostElementId}-gui-container`}
      style={{
        // Set origin (0,0) to match origin of
        // the game canvas
        position: "absolute",

        // So the gui respects the positioning
        // of the canvas
        width: config.width,
        height: config.height,

        // Allow click through this container
        // div
        pointerEvents: "none"
      }}
    >
      <div
        id={`${hostElementId}-gui`}
        style={{
          // The actual GUI, don't allow click through
          // (so Buttons and stuff actually capture the clicks)
          pointerEvents: "auto",
        }}>
        {children}
      </div>
    </div>
  )
}

class GameContainer extends Component<GameProps> {
  inited: Phaser.Types.Core.GameConfig | undefined = undefined
  shouldComponentUpdate(nextProps: GameProps, nextState: object) {
    return !_.isEqual(this.props, nextProps)
  }

  componentDidMount() {
    const {config} = this.props

    // Doing this means we can work in strict mode. Creating a game is naturally side-effectful
    if(!this.inited) {
      this.inited = config
      new Game( { ...config, parent: hostElementId } )
    }
  }

  render() {

    // The games (the `children` prop) GUI will render
    // as the first child and the game Canvas will be
    // the second element.
    //
    // Using `position: "absolute"` will place the GUI
    // OVER the game canvas and match its origin to
    // the game canvas' origin (0,0) which is the
    // top-left, with x increasing going right and
    // y increasing going down.
    return (
      <div id={hostElementId}>
      </div>
    )

  }
}

