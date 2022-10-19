import React from "react";

const Header = ({active, setActive}) => {
  return (
    <div className="flex flex-col  text-center py-5 ">
      <div className="text-4xl font-bold">Task Tracker</div>
      <div
        className={`w-[10rem] py-[.6rem] mx-auto mt-5 cursor-pointer ${
          active ? `bg-red-700` : `bg-slate-200`
        }`}
        onClick={() => setActive(!active)}
      >
        <button>{active ? `Close Add Task Bar` : `Show Add Task Bar`}</button>
      </div>
    </div>
  );
};

export default Header;
