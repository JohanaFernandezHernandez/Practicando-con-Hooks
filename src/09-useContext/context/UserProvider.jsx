import { UserContext } from "./UserContext"

const user = {
    id:123,
    name:'Johana Fernandez',
    email: 'johana@google.com'
}


export const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value= {{ Hola: 'Mundo', user: user}}>
        {children}
    </UserContext.Provider>
  )
}
