import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { FocusScreen } from './04-useRef/focusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { PadrePractica } from './07-tarea-memo/PadrePractica';
// import { HooksApp } from './HooksApp';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02- useEfect/SimpleForm';
// import { FormwithcustonHook } from './02- useEfect/FormWithCustonHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';

// 







import { TodoApp } from './08-useReducer/TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TodoApp />
  // </React.StrictMode>,
)
