import { Container, Form } from "./styles.js"

import Logo from '../../components/logo'
import Input from '../../components/input'
import ButtonText from "../../components/button_text/index.jsx"

function SignUp() {

  return (

    <Container>

    <Logo className="logo" />

    <Form>
      <h1>Create your account</h1>
      <Input id="input" placeholder="Arthur" title="Name" />
      <Input id="input" placeholder="Example: example@example.com" title="Email" />
      <Input id="input" placeholder="Minimum 6 characters" title="Password" />
      <ButtonText className="register-button" title="Register" />
      <p>I'm already registered</p>

    </Form>

    </Container>
  )
}

export default SignUp
