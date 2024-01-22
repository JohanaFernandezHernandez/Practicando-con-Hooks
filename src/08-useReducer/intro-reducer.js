
const inicialState = [{
    id: 1,
    todo: 'Recolecta el cofre',
    done: false,
}];

const todoReducer = (state = inicialState, action= {}) => {

    if(action.type === '[TODO] add todo'){
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'recolecta la priedra de poder',
    done: false,
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction);

console.log(todos);