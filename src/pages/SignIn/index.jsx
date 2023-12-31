import { Container, Form } from "./styles.js"

import Logo from '../../components/logo'
import Input from '../../components/input'
import ButtonText from "../../components/button_text/index.jsx"
import Button from "../../components/button/index.jsx"

import { useAuthContext } from "../../authHook/context.jsx"

import { useState } from 'react'
import { useNavigate } from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignIn() {

  const navigate = useNavigate()
  
  const contextDataObject = useAuthContext() // calling the context object
  
  function handleSignIn() {

    if (!email && !password) {
      return  toast.error("Please, inform your login information.")
    } else if (!password) {
      return toast.error("Please, inform your password.")
    } else if (!email) {
      return toast.error("Please, inform your email.")
    }

    contextDataObject.signIn({ email, password })
  }
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [inputType, setInputType] = useState('password')
  

  function showPassword() {

    if (inputType === "password") {
      setInputType('text') 
    } else {
      setInputType('password') 
    }

  }

  function handleNavigate() {
    navigate('/register')
  }


  return (

    <>
    <ToastContainer />
    <Container>

    <Logo className='logo' />

    <Form>
      
      <h1>Login</h1>

      <Input className="input" placeholder="Example: example@example.com" title="Email" onChange={e => setEmail(e.target.value)}/>

      <Input type={inputType} className="input" placeholder="Minimum 6 characters" title="Password" onChange={e => setPassword(e.target.value)}/>

      <div className="show-password-checkbox">

        <input type="checkbox" id="password-visible-check" onChange={showPassword} /> 
        <label htmlFor="password-visible-check">Show Password</label>

      </div>

      <ButtonText className="signIn-button" title="Sign In" onClick={handleSignIn} />
      
      
      <Button title='Create account' className='registerButton' onClick={handleNavigate} />

    </Form>

    

    </Container>

    </>
  )
}

export default SignIn
