import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChoiceItem from "./ChoiceItem";

export default function ChoicePage(props: any) {
  const navigate = useNavigate();
  
  
  const ItemsConfig = [
    { title: "TAILLE", label: ["width", "height"], placeholder: ["largeur", "hauteur"] },
    { title: "POSITION", label: ["x", "y"], placeholder: ["x", "hauteur"] },
  ];
  const [valueImage, setValueImage] = useState({})

  async function handleSubmit() {
    const imagesNames = props.imagesNames;
    const imagePath = await axios.post("http://localhost:8000/generate-image", { valueImage, imagesNames });
    props.setLinkSource(`http://localhost:8000/image/${imagePath.data}`);
    navigate("/result");
  }

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-3xl mt-8">Choisissez vos réglages</h1>
      </div>
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex w-screen h-screen  justify-center  gap-10 items-center">
        {ItemsConfig.map((item, index) => (
          <ChoiceItem
            title={item.title}
            label={item.label}
            setValueImage={setValueImage}
            valueImage={valueImage}
            placeholderItem={item.placeholder}
            key={index}
          />
        ))}
        <button
          type="submit"
          className="border-2 p-2 ml-2 rounded-xl bg-slate-100 shadow-lg"
          onClick={handleSubmit}
        >
          Envoyer
        </button>
      </div>
      </div>
      </div>
  );
}
