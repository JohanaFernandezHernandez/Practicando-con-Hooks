import { render, screen } from "@testing-library/react"
import { LoginPage } from "../../src/09-useContext/LoaginPage"
import { UserContext } from "../../src/09-useContext/context/UserContext"

describe('pruebas en LoaginPage', () => { 
    test('Debe de mostrar el componente sin el usuario', () => { 
        render(
        <UserContext.Provider value={{user: null}}>
            <LoginPage/>
        </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect (preTag.innerHTML).toBe('null');



     })
 })