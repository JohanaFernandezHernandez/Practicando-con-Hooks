import { renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"
import { act } from "react-dom/test-utils";

describe('Pruebas en useForm', () => { 
    const inicialForm = {
        name: 'Johana',
        email: 'johana@gmail.com.com'
    }
    test('Debe de regresar el objeto por defecto', () => { 

        const { result } = renderHook( () => useForm(inicialForm));
        expect(result.current).toEqual({
            name: inicialForm.name,
            email: inicialForm.email,
            formState: inicialForm,
            onInputChange: expect.any ( Function ),
            onResetForm: expect.any ( Function ),
        });
     });

    test('Debe de cambiar el nombre del formulario', () => { 

        const newValue = 'Nancy'

        const { result } = renderHook( () => useForm(inicialForm));

        act(() => {
            result.current.onInputChange({ target: { name: 'name', value: newValue } });
          });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);

     });

     test('Debe de cambiar el nombre del formulario', () => { 

        const newValue = 'Nancy'

        const { result } = renderHook( () => useForm(inicialForm));

        act(() => {
            result.current.onInputChange({ target: { name: 'name', value: newValue } });
            result.current.onResetForm();
          });

        expect(result.current.name).toBe(inicialForm.name);
        expect(result.current.formState.name).toBe(inicialForm.name);

     });
 })