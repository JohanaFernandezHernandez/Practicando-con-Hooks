import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock("../../src/hooks/useCounter");

describe('Pruebas en MultipleCustomHooks', () => {

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment:mockIncrement,
     }) 


    test('Debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasErros: null,
        })

        render( <MultipleCustomHooks/>);
        expect( screen.getByText('Loading...'));
        expect ( screen.getByText('BreakingBad Quotes'));

        // const nextButton = screen.getByRole('Button');
        // expect (nextButton.disabled).toBeTruthy();

     });

    test('Debe de mostrar un Quote', () => { 

        useFetch.mockReturnValue({
            data: [{author:'johana', quote: 'Hola Mundo'}],
            isLoading: false,
            hasErros: null,
        })
       
        render( <MultipleCustomHooks/>);
        expect ( screen.getByText('Hola Mundo')).toBeTruthy();
        expect ( screen.getByText('johana')).toBeTruthy();

        const Buttonnex = screen.getByRole('button',{name: 'Nex Quot'});
        expect (Buttonnex.disabled).toBeFalsy();


     });

    test('Debe de llamar la funcion de incrementar', () => { 

        useFetch.mockReturnValue({
            data: [{author:'johana', quote: 'Hola Mundo'}],
            isLoading: false,
            hasErros: null,
        });

        
       
        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', {name: 'Nex Quot'});
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();



     })
 })