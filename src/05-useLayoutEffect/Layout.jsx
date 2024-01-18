import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {
    const {counter, increment} = useCounter(1);

    const apiUrl = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`;

    const { data, isLoading, hasErros} = useFetch(apiUrl);
    // console.log({ data, isLoading, hasErros});
    const { author, quote } = !!data && data[0];

    // console.log("data:", data);





  return (
    <div className="contenedor">
      <h1>BreakingBad Quotes</h1>

      <hr />
      
      <button onClick={() => increment(1)} className="btn btn-primary">
        Nex Quot
      </button>

      {
      isLoading 
      ? <LoadingQuote/> 
      : <Quote todos={data} />
      }

    </div>
  );
}
