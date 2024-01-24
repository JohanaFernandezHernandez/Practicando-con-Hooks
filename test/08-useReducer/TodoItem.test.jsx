import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en TodoItem', () => { 

    const todo = {
        id: 1,
        descripcion: 'Disciplina y perseverancia amor',
        done: false,
    }

    const onDeleteTodoMock = jest.fn(); // esto es para llamar alguna funcion de nuestro codigo
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks()); //esto es para limpiar la funcio al final de la prueba


    test('Debe de mostrar el TODO pendiente de completar', () => {

        render(<TodoItem 
            todo= { todo } 
            onDeleteTodo={ onDeleteTodoMock}
            onToggleTodo={ onToggleTodoMock }/>);

        const liElement = screen.getByRole('listitem');
        expect (liElement.className).toBe('list-group-item d-flex justify-content-between');

        
        const spanElement = screen.getByLabelText('span');
        expect ( spanElement.className).toContain('align-self-center')

     });


     test('Debe de mostrar el TODO completado', () => {

        todo.done= true,

        render(<TodoItem 
            todo= { todo } 
            onDeleteTodo={ onDeleteTodoMock}
            onToggleTodo={ onToggleTodoMock }/>);

        
        const spanElement = screen.getByLabelText('span');
        expect ( spanElement.className).toContain('align-self-center');
        expect ( spanElement.className).toContain('text-decoration-line-through');

     });

    test('El span debe de llamar el ToggleTodo cuando se ahce click', () => { 

        render(<TodoItem 
            todo= { todo } 
            onDeleteTodo={ onDeleteTodoMock}
            onToggleTodo={ onToggleTodoMock }/>);

        const spanElement = screen.getByLabelText('span');

        fireEvent.click( spanElement); // esto es para simular que se hace click en el span
        expect( onToggleTodoMock ).toHaveBeenCalledWith ( todo.id);// esto es para probar que la funcio haya sido llamada con el argumento de 1 osea todo.id 

     });

    test('el Button dee de llamar el DeleteTodo cuando se realice el click ', () => { 

        render(<TodoItem 
            todo= { todo } 
            onDeleteTodo={ onDeleteTodoMock}
            onToggleTodo={ onToggleTodoMock }/>);

        const buttonElement = screen.getByRole('button');
        fireEvent.click ( buttonElement );
        expect ( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );

     });


 });