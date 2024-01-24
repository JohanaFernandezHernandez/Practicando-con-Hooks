import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en TodoReducer', () => { 

    const inicialState = [{
        id: 1,
        descripcion: 'Demo Todo',
        done: false,
    },
    {
        id: 3,
        descripcion: 'Demo Todo #3',
        done: false,

    }];


    test('Debe de regresar el estado inicial', () => { 

        const newState = todoReducer(inicialState, {});
        expect( newState ).toBe( inicialState);

        
     });

    test('Debe de agregar un Todo', () => { 
        const action ={
            type:'Add TODO',
            payload:{
                id:2,
                description: 'Nuevo Todo #2',
                done:false
            }
        };

        const newState = todoReducer( inicialState, action);
        expect( newState.length ).toBe(3);
        expect ( newState ).toContain( action.payload);

    });

    test('Debe de eliminar un Todo', () => { 
        const action = { 
            type: 'Remove TODO',
             payload: 1 };

        const newState = todoReducer(inicialState, action);

        expect ( newState.length).toBe(1);

        

    })

    test('Debe de realizar el cambio del TODO', () => { 
        const action = {
            type: 'Change TODO',
            payload : 1
        }

        const newState = todoReducer(inicialState, action);
        expect( newState[0].done).toBe(true);

     })
 })