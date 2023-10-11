import {Phaser} from "@gamedev/react/components//phaser";
import {BaseScene} from "./BaseScene";

const config :Phaser.Types.Core.GameConfig = {
  width: 400,
  height: 400,
  title: "test",
  scene: BaseScene
}

export function App() {
  return (
    <div>
      <Phaser config={config} />
    </div>
  );
}

export default App;
