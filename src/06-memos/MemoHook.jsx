import { useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = (iterationNumber = 100) => {
  for(let i=0; i<  iterationNumber; i++){
    console.log('ahi vamos...')
  }
  return `${ iterationNumber} iteraciones realizadas`;

}

export const MemoHook = () => {

    const { counter, increment} = useCounter(200);
    const [box, setbox] = useState(true);

    const memorizedValue = useMemo( () => heavyStuff ( counter), [counter] );


  return (
    <>

        <h1>Counter <small>{ counter }</small></h1>

        <hr />

        <h4>{ memorizedValue }</h4>

        <button
            className="btn btn-primary"
            onClick={ () =>  increment() }
            >
            +1
        </button>

        <button
        className="btn btn-primary"
        onClick={() => setbox (!box )}
        >
            show/hide { JSON.stringify(box)}

        </button>
    
    </>
  )
}
