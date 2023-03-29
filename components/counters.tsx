// Example from https://beta.reactjs.org/learn

import { useState } from "react";
import styles from "./counters.module.css";

const Counters = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick} className={styles.counter}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default Counters;
