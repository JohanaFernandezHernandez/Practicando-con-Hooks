import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"

const inicialState = [
    // {
    //     id: new Date().getTime(),
    //     descripcion: 'Recoger la piedra del alma',
    //     done: false,
    // }
];

const inicial = () => {
  return JSON.parse( localStorage.getItem('todos') || []);
}



export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, inicialState, inicial)

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleNewTodo = (todo) => {
      const action = {
        type: 'Add TODO',
        payload: todo
      }
      dispatch(action)
    }

    const handleDeleteTodo = (id)  => {
      dispatch({
        type: 'Remove TODO',
        payload: id

      })
      
    }
    
  return (
    <>
      <h1>
        TodoApp: 10, <small>Pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
            <TodoList todos={todos} onDeleteTodo={ handleDeleteTodo } />
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
}
