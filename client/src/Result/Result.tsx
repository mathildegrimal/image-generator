import React from "react";

export default function Result() {
  return (
    <div className="h-screen w-screen bg-slate-100 flex justify-center items-center">
      <div className="bg-slate-700 h-1/2 w-full">
        <div className="flex justify-center">
          <div className="flex justify-around mt-3 w-1/2">
            <button
              type="submit"
              className="border-2 p-2 ml-2 rounded-xl bg-slate-100 shadow-lg"
            >
              Envoyer
            </button>
            <button
              type="submit"
              className="border-2 p-2 ml-2 rounded-xl bg-slate-100 shadow-lg"
            >
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
