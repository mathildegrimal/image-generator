import React, { useState } from "react";
import FileInput from "./FileInput";
import axios from "axios";
export default function HomePage() {
  
  const [images, setImages] = useState<FormData[]>([]);
  const handleChange = (e: any) => {
    const imagesToUpload = images;
    const formData = new FormData();
    images.push(formData);
    formData.append("my-image-file", e.target.files[0], e.target.files[0].name);
    setImages(imagesToUpload);
    console.log(images);
  }
  const handleClick = () => {
    for (const image of images) {
      axios.post("http://localhost:8000/image-upload", image);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-auto p-4 h-auto bg-cyan-100 rounded-xl shadow-xl">
        <div className="flex  items-center justify-center bg-grey-lighter">
          <div className="flex-col items-center">
            <input type="file" onChange={handleChange} />
            <input type="file" onChange={handleChange} />
          </div>
          <button
            type="submit"
            className="border-2 p-2 ml-2 rounded-xl bg-slate-100 shadow-lg"
            onClick={handleClick}
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
}
