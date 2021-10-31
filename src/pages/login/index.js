import React, {useState} from "react";
import {Form, Button} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { createLogin } from './actions'

const styles = {
  loginContainer: {
    margin: 25,
    display: 'flex',
    justifyContent: 'center'
  }

}

// Make or create dispatch from component 

const Login = () => {
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  const dispatch = useDispatch()


  const handleSubmit = e => {
    e.preventDefault()
    dispatch(createLogin({userName, password}))
  }

  const handleChange = e => {
    const { name, value } = e.target;
    name === "username" ? setUserName(value) : setPassword(value)
  }


  return (
    <div style={styles.loginContainer}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" name="username" placeholder="Enter User Name" onChange={handleChange}/>
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" name="password" placeholder="Password" onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
        Submit
        </Button> 
      </Form>
    </div>
  )

}


export default Login