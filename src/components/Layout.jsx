import React, {useState} from "react";
import {Header, AddTask, Task} from ".";

const Layout = () => {
  const [isActive, setisActive] = useState(false);

  const [data, setData] = useState([
    {
      id: new Date().getMilliseconds(),
      title: `Alpha Team`,
      date: `Dec 12 12.00PM`,
      complated: false,
    },
  ]);

  //Func
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getMilliseconds(),
      title: e.target.taskName.value,
      date: e.target.selectt.value,
      complated: false,
    };
    setData([...data, newTodo]);
  };
  //Delete Func
  const handleRemove = (id) => {
    setData(data.filter((todo) => todo.id !== id));
  };

  //Func section is done
  return (
    <div className="mt-[2.5rem] w-[40rem] bg-pink-500 pb-10">
      <Header active={isActive} setActive={setisActive} />
      {isActive && (
        <div className="w-[30rem] mx-auto d">
          <AddTask handleSubmit={handleSubmit} />
        </div>
      )}
      {data.length !== 0 ? (
        <div className="max-h-[25rem] overflow-y-auto">
          {data.map((item, idx) => (
            <div key={idx}>
              <Task data={item} handleRemove={handleRemove} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl font-semibold">No Task Yet</p>
      )}
    </div>
  );
};

export default Layout;
