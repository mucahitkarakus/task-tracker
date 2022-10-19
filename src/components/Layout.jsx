import React, {useState} from "react";
import {Header} from ".";

const Layout = () => {
  const [isActive, setisActive] = useState(false);

  return (
    <div>
      <Header active={isActive} setActive={setisActive} />
    </div>
  );
};

export default Layout;
