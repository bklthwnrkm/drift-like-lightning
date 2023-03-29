// Example from https://beta.reactjs.org/learn

import { useState } from "react";

const Counters = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick} className="bg-blue-500">
        Clicked {count} times
      </button>
    </div>
  );
};

export default Counters;
