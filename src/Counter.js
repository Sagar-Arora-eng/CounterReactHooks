 import { useState, useEffect } from "react";


// Use React Hooks for incrementing, decrementing and resetting the value of the counter.
// Also, print the value of count on the console by using useEffect hook.



function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('count : ', count);
  })

  function handleChangeIncrement(){
    setCount(count+1)
  }
  function handleChangeDecrement(){
    setCount(count-1)
  }
  function handleChangeReset(){
    setCount(0)
  }

  return (
    <>
      <p>Count value is: {count} </p>
      <button onClick = {handleChangeReset}>Reset</button>
      <button  onClick = {handleChangeIncrement}>Plus (+)</button>
      <button  onClick = {handleChangeDecrement}>Minus (-)</button>
    </>
  );
}

export default Counter;
