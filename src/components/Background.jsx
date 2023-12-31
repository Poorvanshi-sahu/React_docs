import React from "react";

const Background = () => {
  return (
    <>
      <div className="h-screen w-full fixed z-[2]">
        <div className="absolute top-[5%] w-full py-[20px] text-center text-zinc-700 font-semibold">
          Documents
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tight font-semibold text-zinc-600">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
