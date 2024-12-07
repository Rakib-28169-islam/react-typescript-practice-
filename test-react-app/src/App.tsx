//import { useState } from 'react'
//import Form from './useRef/Form'
import './App.css'
import { UserContextProvider } from './contextApi/UserContextProvider'
import UserForm from './components/UserForm'
import UserData from './components/UserData'

function App() {
 // const [count, setCount] = useState(0);

  return (
    <>
     
     <UserContextProvider>
     <h1>hello rokib</h1>
     <UserForm/>
     <UserData/>


     </UserContextProvider>

     
      </>
  )
}

export default App
