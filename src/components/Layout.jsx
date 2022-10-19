import React, {useState} from "react";
import {Header, AddTask, Task} from ".";

const Layout = () => {
  const [isActive, setisActive] = useState(false);

  useEffect(() => {
    first;

    return () => {
      second;
    };
  }, [third]);

  const Data = [
    {
      id: new Date().getMilliseconds(),
      title: `Alpha Team`,
      date: `Dec 12 12.00PM`,
      complated: false,
    },
  ];

  return (
    <div className="mt-[2.5rem] w-[40rem] bg-pink-500 pb-10">
      <Header active={isActive} setActive={setisActive} />
      {isActive && (
        <div className="w-[30rem] mx-auto d">
          <AddTask />
        </div>
      )}
      {Data.map((item, idx) => (
        <div key={idx}>
          <Task data={item} />
        </div>
      ))}
    </div>
  );
};

export default Layout;
