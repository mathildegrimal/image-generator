import React from "react";
import FileInput from "./FileInput";

export default function HomePage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-auto p-4 h-auto bg-cyan-100 rounded-xl shadow-xl">
        <div className="flex  items-center justify-center bg-grey-lighter">
          <div className="flex-col items-center">
            <FileInput value="Votre premiere photo" />
            <FileInput value="Votre deuxieme photo" />
          </div>
          <button
            type="submit"
            className="border-2 p-2 ml-2 rounded-xl bg-slate-100 shadow-lg"
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
}
