import React from "react";

export interface Props {
  title: string;
  label: string[];
  placeholderItem: string[];
  valueImage: any;
  setValueImage: any;
}
export default function ChoiceItem({ title, label, placeholderItem, valueImage, setValueImage }: Props) {

function handleChange(e: any){
    setValueImage({...valueImage, [e.target.name]: parseInt(e.target.value)})
}
  return (
    <div className="flex-col justify-center bg-cyan-200 p-2 rounded-xl shadow-lg">
      <h2 className="text-center text-lg">{title}</h2>
      <label htmlFor={label[0]}>{label[0]}</label>
      <input
        className="block mt-5 mb-10 rounded-md text-center"
        name={label[0]}
        type="number"
        placeholder={placeholderItem[0]}
        onChange={handleChange}
      />
      <label htmlFor={label[1]}>{label[1]}</label>
      <input
        className="block mt-5 mb-10 rounded-md text-center"
        name={label[1]}
        type="number"
        placeholder={placeholderItem[1]}
        onChange={handleChange}
      />
    </div>
  );
}
