import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({todos}) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({width: 0, height: 0})

  useLayoutEffect(() => {
    const {width, height } = pRef.current.getBoundingClientRect();
    setBoxSize ({ width, height})

  
  }, [])



return(
    todos.map((quoteData, i) => (
      <div  key={i}>
        <blockquote 
        className="blockquote text-end"
        style={{ display: 'flex'}}>
          <p ref={ pRef} className="mb-1">{quoteData.quote}</p>
          <footer className="blockquote-footer">{quoteData.author}</footer>
        </blockquote>

        <code>{JSON.stringify(boxSize)}</code>
      </div>
    ))

  );
}

