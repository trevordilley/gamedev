import {Phaser} from "@gamedev/react/components//phaser";
import {BaseScene} from "./BaseScene";

const config :Phaser.Types.Core.GameConfig = {
  width: 4096,
  height: 3072,
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
