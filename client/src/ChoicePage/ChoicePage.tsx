import React from "react";
import ChoiceItem from "./ChoiceItem";

export default function ChoicePage() {
  const ItemsConfig = [
    { title: "TAILLE", label: ["w", "h"], placeholder: ["largeur", "hauteur"] },
    { title: "POSITION", label: ["x", "y"], placeholder: ["x", "hauteur"] },
  ];
  return (
    <div className="h-screen w-screen bg-slate-100 flex justify-center items-center">
      <div className="flex w-screen h-screen justify-around items-center">
        {ItemsConfig.map((item) => (
          <ChoiceItem
            title={item.title}
            label={item.label}
            placeholderItem={item.placeholder}
          />
        ))}
        <button
          type="submit"
          className="border-2 p-2 ml-2 rounded-xl bg-slate-100 shadow-lg"
        >
          Envoyer
        </button>
      </div>
    </div>
  );
}