import React, { useState } from "react";
import ChoiceItem from "./ChoiceItem";

export default function ChoicePage() {
  const ItemsConfig = [
    { title: "TAILLE", label: ["width", "height"], placeholder: ["largeur", "hauteur"] },
    { title: "POSITION", label: ["x", "y"], placeholder: ["x", "hauteur"] },
  ];
  const [valueImage, setValueImage] = useState({})
  function handleSubmit () {
    //todo envoyer les données au back
  }
  console.log(valueImage)
  return (
    <div className="h-screen w-screen bg-slate-100 flex justify-center items-center">
      <div className="flex w-screen h-screen justify-around items-center">
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
  );
}
