import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello'
import Demo from './components/Demo'

function App() {

  const name = "Prasad"
  const email = "prasad@gmail.com"
  const student = {
    sname : "Prasad",
    rollno : "5886",
    email : "prasad@gmail.com",
    mobile: "9988774455"
  }
  const products = [
    {
      pid : "1001",
      pname : "Apple Mobile",
      price : 45000
    },
    {
      pid : "1002",
      pname : "Samsung Mobile",
      price : 55000
    },
    {
      pid : "1003",
      pname : "Vivo Mobile",
      price : 35000
    },
    {
      pid : "1004",
      pname : "Nokia Mobile",
      price : 25000
    }

  ]
  return (
    /*<>
       <Hello name={name} email={email}/>
    </> */
     <>
       <Demo products={products} />
    </>
  )
}
export default App
