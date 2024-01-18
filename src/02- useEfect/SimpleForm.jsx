import { useEffect, useState } from "react"
import { Message } from "./Message";



    export const SimpleForm = () => {

        const [formState, setFormState] = useState({
            username: 'johana',
            email: 'johana@gmail.com'
        });

        const {username, email} = formState;

        const onInputChange = ({target}) => {
            const { name , value } = target;
            // console.log({ name , value })
            setFormState ({
                ...formState,
                [name]: value,
            })
        }

        useEffect( () => {
            // console.log('useEfect se llamo');
        }, [ ])

        useEffect( () => {
            // console.log('cambio el formulario');
        }, [ formState ]);

        useEffect( () => {
            // console.log('cambio el email');
        }, [ email ]);


    return (
        <>
        <h1>Simple Form</h1>

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

        {
        (username === 'johana2') && <Message/>
        }

        


        </>
    
    )
    }
