import { useRef } from "react";
import Card from "./Card";

const Forground = () => {
  const data = [
    {
      text: "Lorem ipsum dolor, sit amet consec.",
      fileSize: "4mb",
      close: true,
      download: false,
      tag: { showTag: true, tagText: "Download Now", tagColor: "blue" },
    },
    {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elitCupiditate enim quam eveniet aspernatur velit perferendis Lorem ipsum dolor, sit amet consectetur adipisicing elitCupiditate enim quam eveniet aspernatur velit perferendis",
      fileSize: "6.0mb",
      close: true,
      download: false,
      tag: { showTag: true, tagText: "Download Now", tagColor: "green" },
    },
    {
      text: "Lorem ipsum dolor, sit amet e enim quam eveniet aspernatur velit perferendis",
      fileSize: "2mb",
      close: false,
      download: true,
      tag: { showTag: true, tagText: "Download Now", tagColor: "blue" },
    },
    {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elitCupiditate enim quam eveniet aspernatur velit perferendis Lorem ipsum dolor, sit amet consectetur adipisicing elitCupiditate enim quam eveniet aspernatur velit perferendis",
      fileSize: "6.0mb",
      close: true,
      download: false,
      tag: { showTag: true, tagText: "Download Now", tagColor: "green" },
    },
    {
      text: "Lorem ipsum dolor, sit amet e enim quam eveniet aspernatur velit perferendis",
      fileSize: "2mb",
      close: false,
      download: true,
      tag: { showTag: true, tagText: "Download Now", tagColor: "blue" },
    },
    {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elitCupiditate enim quam eveniet aspernatur velit perferendis",
      fileSize: "4mb",
      close: true,
      download: false,
      tag: { showTag: true, tagText: "Download Now", tagColor: "blue" },
    },
    {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elitCupiditate enim quam eveniet aspernatur velit perferendis Lorem ipsum dolor, sit amet consectetur adipisicing elitCupiditate enim quam eveniet aspernatur velit perferendis",
      fileSize: "6.0mb",
      close: true,
      download: false,
      tag: { showTag: true, tagText: "Download Now", tagColor: "green" },
    },
    {
      text: "Lorem ipsum dolor, sit amet e enim quam eveniet aspernatur velit perferendis",
      fileSize: "2mb",
      close: false,
      download: true,
      tag: { showTag: true, tagText: "Download Now", tagColor: "blue" },
    },
    {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elitCupiditate enim quam eveniet aspernatur velit perferendis",
      fileSize: "4mb",
      close: true,
      download: false,
      tag: { showTag: true, tagText: "Download Now", tagColor: "blue" },
    },
    {
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elitCupiditate enim quam eveniet aspernatur velit perferendis Lorem ipsum dolor, sit amet consectetur adipisicing elitCupiditate enim quam eveniet aspernatur velit perferendis",
      fileSize: "6.0mb",
      close: true,
      download: false,
      tag: { showTag: true, tagText: "Download Now", tagColor: "green" },
    },
    {
      text: "Lorem ipsum dolor, sit amet e enim quam eveniet aspernatur velit perferendis",
      fileSize: "2mb",
      close: false,
      download: true,
      tag: { showTag: true, tagText: "Download Now", tagColor: "blue" },
    },
  ];

  const constraintsRef = useRef(null);

  return (
    <>
      <div
        ref={constraintsRef}
        className="absolute w-full h-full overflow-y-auto overflow-x-hidden bg-sky-100/2 z-[3] top-0 left-0 flex gap-7 flex-wrap p-5"
      >
        {data.map((item, index) => {
          return <Card data={item} key={index} reference={constraintsRef} />;
        })}
      </div>
    </>
  );
};

export default Forground;
