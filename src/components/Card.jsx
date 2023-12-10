import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
        className="h-64 w-52 rounded-[45px] bg-zinc-900 p-8 relative overflow-hidden text-slate-200 cursor-pointer"
      >
        <FaRegFileAlt />
        <h1 className="mt-[12px] leading-tight font-semibold text-sm text-truncate">
          {data.text.length > 100
            ? data.text.split("").slice(0, 100).join("") + "..."
            : data.text}
        </h1>
        <div className="footer absolute bottom-0 left-0 w-full">
          <div className="upper mb-4 px-8 flex text-center justify-between">
            <h3>{data.fileSize}</h3>
            <span className="h-6 w-6 rounded-full bg-zinc-600 flex items-center justify-center cursor-pointer">
              {data.download && <GoDownload color="white" />}
              {data.close && <IoCloseOutline color="white" />}
            </span>
          </div>
          {data.tag.showTag && (
            <div
              className={`lower py-2 ${
                data.tag.tagColor === "blue" ? "bg-blue-900" : "bg-green-700"
              }  flex justify-center items-center text-slate-50`}
            >
              {data.tag.tagText}
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
