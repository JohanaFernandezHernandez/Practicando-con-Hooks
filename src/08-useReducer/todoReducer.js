

export const todoReducer = (inicialState= [], action) => {

    const {type, payload} = action;

    switch (type) {
        case 'Add TODO':
                return[...inicialState, payload];
        
        case 'Remove TODO':
               return inicialState.filter( todo => todo.id !== payload );
    
        default:
            return inicialState;
    }
    
}