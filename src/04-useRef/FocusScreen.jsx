import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();


    const onClick = () => {
        // console.log(inputRef);
        inputRef.current.select();

    }



  return (
    <>
        <h1>Focus Screen</h1>

        <hr />

        <input 
            ref={ inputRef }
            type="text" 
            placeholder="Ingresa Tu Nombre"
            className="form-control"
        />

        <button className="btn btn-primary mt-2" onClick={ onClick } >
            set Focus
        </button>
    </>
  )
}
