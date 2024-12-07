//import { useState } from 'react'
//import Form from './useRef/Form'
import './App.css'
import { UserContextProvider } from './contextApi/UserContextProvider'
import UserForm from './components/UserForm'
import UserData from './components/UserData'
import IncrementDecrement from './components/IncrementDecrement'
import {IncrementDecrementContextProvider} from './contextApi/UserContextProvider'

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>

      <UserContextProvider>

        <IncrementDecrementContextProvider>
         
          <h1>hello rokib</h1>
          <UserForm />

          <UserData />
          <IncrementDecrement />

        </IncrementDecrementContextProvider>



      </UserContextProvider>


    </>
  )
}

export default App
