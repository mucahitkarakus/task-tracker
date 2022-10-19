import React from "react";
import {AiOutlineClose} from "react-icons/ai";

const Task = ({data, handleRemove}) => {
  return (
    <div className="w-[30rem] mx-auto py-3">
      <div className={`bg-white p-4 flex justify-between items-center`}>
        <div className="w-full cursor-pointer">
          <p className={`font-bold text-xl`}>{data.title}</p>
          <p className={``}>{data.date}</p>
        </div>
        <div
          onClick={() => handleRemove(data.id)}
          className="text-xl text-red-800 cursor-pointer p-2 bg-slate-200 rounded-full"
        >
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
};

export default Task;
