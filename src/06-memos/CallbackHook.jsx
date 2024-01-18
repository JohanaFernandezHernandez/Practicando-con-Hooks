import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    
    const incrementarFather= useCallback(
      (value) => {
        setCounter ( (counter) => counter + value); 
      },
      [],
    )
    

    // const incrementarFather = () => {
    //     setCounter ( counter + 1);
    // }


  return (
    <>
        <h1>UseCallbackHook: { counter }</h1>

        <hr />

        <ShowIncrement increment={ incrementarFather}/>
    </>
  )
}
