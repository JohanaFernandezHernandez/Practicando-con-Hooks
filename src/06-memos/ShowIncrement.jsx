import React from "react";


export const ShowIncrement = React.memo( ({ increment}) => {

    console.log( ' Me volvieron a llamar..')
  return (
    <button
        className="btn btn-primary"
        onClick={() => {
            increment(5);
        }}>
            Increment
    </button>
  )
})
