import {ChangeEventHandler, useState} from "react";

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
      {image && <img alt="preview image" src={image}/> }
    </div>
  );
}

export default App;
