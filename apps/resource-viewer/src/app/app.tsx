// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Phaser} from "@gamedev/react/components//phaser";
import {knightResource} from "@gamedev/libs/resources/knight";

const knight = knightResource("knight")

const config :Phaser.Types.Core.GameConfig = {
  width: 400,
  height: 400,
  title: "test",
  scene: {
    preload: function () { knight.load(this)},
    create: function() {
      knight.create(this)
      const k = knight.add(this, 100, 200 )
      k.walk()
    }
  }}

export function App() {
  console.log("App?")
  return (
    <div>
      <Phaser config={config} />
    </div>
  );
}

export default App;
