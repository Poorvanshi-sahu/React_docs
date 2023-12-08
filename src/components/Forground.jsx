import React from "react";
import Card from "./Card";

const Forground = () => {
  return (
    <>
      <div className="absolute w-full h-full bg-sky-100/2 z-[3] top-0 left-0">
        <Card />
      </div>
    </>
  );
};

export default Forground;
