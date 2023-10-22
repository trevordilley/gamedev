import {ChangeEventHandler, useState} from "react";
import {LevelEditor} from "./levelEditor/levelEditor";

export function App() {
  const [image, setImage] = useState<string | undefined>(undefined)

  const onImageChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img =URL.createObjectURL(event.target.files[0])
      setImage(img);
    }
  }

  return (
    <div>
      <label htmlFor={"file"}>Choose Background Image</label>
      <input id={"file"} type={"file"} onChange={onImageChange} />
      {image && <LevelEditor levelImageUrl={image} polygons={[
        {
          projectId:1,
          fill: {r: 255, g: 0, b: 0},
          tags: ["vicious"],
          id: 1,
          layer: 1,
          points: [
            [50,50],
            [500, 200],
            [580,520],
            [250, 710],
            [50, 460]
          ]},
        {
          projectId:1,
          fill: {r: 0, g: 255, b: 0},
          tags: ["vicious"],
          id: 2,
          layer: 1,
          points: [
            [150,150],
            [600, 300],
            [680,620],
            [350, 810],
            [150, 560]
          ]}
      ]}/> }
    </div>
  );
}

export default App;
