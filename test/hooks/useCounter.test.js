import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react-dom/test-utils";

describe('Pruebas en el useCounter', () => { 

    test('debe de retornar los valores por defecto', () => { 
        const { result } =renderHook( () => useCounter());
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(10);
        expect (decrement ).toEqual( expect.any( Function ));
        expect (increment ).toEqual( expect.any( Function ));
        expect (reset ).toEqual( expect.any( Function ));

     });

    test('Debe de generar el counter con el valor de 100', () => { 

       const { result } = renderHook(() => useCounter(100));
       expect(result.current.counter).toBe(100);

     });

    test('Test debe de incrementar el contador', () => { 
        const { result } =renderHook( () => useCounter(100));
        const { counter, increment } = result.current;

        act( () => {
            increment();
            increment(4);
        })

        expect ( result.current.counter ).toBe(105)

     });

     test('Test debe de disminuir el contador', () => { 
        const { result } =renderHook( () => useCounter(100));
        const { counter, decrement } = result.current;

        act( () => {
            decrement();
            decrement(4);
        })

        expect ( result.current.counter ).toBe(95)

     });

     test('Test debe de realizar el reset del contador', () => { 
        const { result } =renderHook( () => useCounter(100));

        act(() => {
            result.current.decrement();
            result.current.reset();
          });
        
          expect(result.current.counter).toBe(100);


     });

 });