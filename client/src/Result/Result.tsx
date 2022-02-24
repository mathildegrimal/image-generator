import React, { useState } from "react";

export default function Result(props:any) {

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <a
        href={props.linkSource}
        download
        className="text-3xl text-cyan-600"
      >
        Cliquez pour télécharger l'image générée
      </a>
    </div>
  );
}
