import React, { useState } from "react";
import FileInput from "./FileInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HomePage(props: any) {
  
  const navigate = useNavigate();
  const [images, setImages] = useState<FormData[]>([]);
  // const [imagesNames, setImagesNames]= useState<String[]>([])
  const handleChange = (e: any) => {
    const imagesToUpload = images;
    const formData = new FormData();
    images.push(formData);
    formData.append("image", e.target.files[0], e.target.files[0].name);
    setImages(imagesToUpload);
    console.log(images);
  }
  const handleClick = async () => {
    props.setImagesNames([]);
    for (const image of images) {
      const result = await axios.post("http://localhost:8000/image-upload", image);
      const imagesNamesUpdated = props.imagesNames;
      imagesNamesUpdated.push(result.data);
      props.setImagesNames(imagesNamesUpdated);
    }
    setImages([]);
    navigate("/choice");
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
