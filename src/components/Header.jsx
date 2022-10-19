import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col  text-center py-5 ">
      <div className="text-4xl font-bold">Task Tracker</div>
      <div
        className={`w-[10rem] py-[.6rem] mx-auto mt-5 cursor-pointer bg-red-700`}
      >
        <button>Button</button>
      </div>
    </div>
  );
};

export default Header;
