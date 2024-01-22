
import { useForm } from "../hooks/useForm";


export const TodoAdd = ({onNewTodo}) => {

// hook formulario y tratamiento de datos
  const {descripcion, onInputChange, onResetForm, } = useForm({
    descripcion: ''
  });
  
  
  // envio datos formulario 
  const onFormSubmit = (e) => {
    e.preventDefault();

    if (descripcion.trim().length <= 0) return;

    const newTodo = {
      id:new Date().getTime(),
      done:false,
      descripcion: descripcion,
    }
    onNewTodo(newTodo);
    onResetForm();
  }


  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="¿que hay que hacer?"
        className="form-control"
        name="descripcion"
        value={descripcion}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-2">
        Agregar
      </button>
    </form>
  );
}
