import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";




    export const FormwithcustonHook = () => {

        const {formState, onInputChange, onResetForm } = useForm(
              {
            username: '',
            email: '',
            password: ''
        }
        );

        const {username, email, password} = formState;

    return (
        <>
        <h1>Formulario con custom Hooks</h1>

        <hr />

        <input 
        type="text" 
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={ onInputChange }
        />

        <input 
            type="email" 
            className="form-control mt-2"
            placeholder="Tu correo"
            name="email"
            value={ email}
            onChange={ onInputChange}
        />

        <input 
            type="password" 
            className="form-control mt-2"
            placeholder="Tu password"
            name="password"
            onChange={ onInputChange}
            value={ password }
        />

        <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>

        </>
    
    )
    }
