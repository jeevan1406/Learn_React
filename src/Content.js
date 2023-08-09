import React from "react";
import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Earn");
  function heandleNameChange() {
    const names = ["Earn", "Grow", "Give"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  }

  return (
    <main>
      <p>Lets {name} Money</p>
      <p>
        <button onClick={heandleNameChange}>Subscribe</button>
      </p>
    </main>
  );
};
export default Content;
