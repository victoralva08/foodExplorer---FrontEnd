import { Container, Form } from "./styles.js"

import Logo from '../../components/logo'
import Input from '../../components/input'
import ButtonText from "../../components/button_text/index.jsx"

import {api} from '../../services/api.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {

  const [ isAdmin, setIsAdmin ] = useState(null)
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

 

  function handleSignUp() {

    if (!name || !email || !password) {
      return alert("Please, fill all inputs.")
    }

    console.log(isAdmin, name, email, password )

    api.post("/users", { isAdmin, name, email, password })
    .then(() => {

      alert("User successfully registered.")


    }).catch(error => {

      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("User could not be registered.")
      }

    })

  }

  return (

    <Container>

    <Logo className="logo" />

    <Form>
      <h1>Create your account</h1>
      <Input id="input" placeholder="Arthur" title="Name" onChange={e => setName(e.target.value)}/>
      <Input id="input" placeholder="Example: example@example.com" title="Email" onChange={e => setEmail(e.target.value)}/>
      <Input id="input" placeholder="Minimum 6 characters" title="Password" onChange={e => setPassword(e.target.value)}/>

      <div className="admin-checkbox-wrapper">
        <input type="checkbox" id="isAdmin-check" onChange={e => setIsAdmin(e.target.checked ? 1 : null)} /> 
        <label htmlFor="isAdmin-check">Admin</label>
      </div>

      <ButtonText className="register-button" title="Register" onClick={handleSignUp} />
      <p>I'm already registered</p>

    </Form>

    </Container>
  )
}

export default SignUp
