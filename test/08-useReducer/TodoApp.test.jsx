import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp"
import { useTodo } from "../../src/hooks/useTodo"

jest.mock('../../src/hooks/useTodo'); // esto es para llamar o renderizar un HOOK

describe('Pruebas en <TodoApp/>', () => { 

    useTodo.mockReturnValue({
        todos:[
            {id:1, descripcion: 'Todo#1', done: false},
            {id:2, descripcion: 'Todo#2', done: true},
        ],
        todosCount: 2,
        pendientesTodosCount: 1,
        handleToggleTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleNewTodo: jest.fn()

    });


    test('Debe de mostrar el componente correctamente', () => { 
        
        render(<TodoApp/>);
        // screen.debug(); // esto es para mirar que se esta r4enderizando del cmponente TododAPP
        expect( screen.getByText('Todo#1')).toBeTruthy();
        expect( screen.getByText('Todo#2')).toBeTruthy();
        expect( screen.getByRole('textbox')).toBeTruthy();

     })
 })