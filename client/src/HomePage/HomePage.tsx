import React, { useState } from "react";
import axios from 'axios';

export default function HomePage() {

  const [image, setImage]= useState({});

  const getFileInfo = (e:any) => {
      const formData = new FormData();

      //FILE INFO NAME WILL BE "my-image-file"
      formData.append("my-image-file", e.target.files[0], e.target.files[0].name);
      setImage(formData);
  }

  const handleClick = () => {
    console.log(image);
    axios.post('http://localhost:8000/image-upload', 
      image
    )
    .then((res : any) => {
        console.log('Axios response: ', res)
    })
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-auto p-4 h-auto bg-cyan-100 rounded-xl shadow-xl">
        <div className="flex  items-center justify-center bg-grey-lighter">
          <div className="flex-col items-center">
            <input type="file" onChange={getFileInfo}/>
            <input type="file" onChange={getFileInfo}/>
          </div>
          <button
            onClick={handleClick}
            className="border-2 p-2 ml-2 rounded-xl bg-slate-100 shadow-lg"
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
}
