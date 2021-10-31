import React, {useState} from "react";
import {Form, Button} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { signUpUser } from './actions'

const styles = {
  loginContainer: {
    margin: 25,
    display: 'flex',
    justifyContent: 'center'
  }

}

// Make dispatch to new action creator
// action creater will be 

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({})
  const dispatch = useDispatch()


  const handleSubmit = e => {
    e.preventDefault()
    console.log('handle submit')
    dispatch(signUpUser(userInfo))
  }

  const handleChange = e => {
    const userObject = {}
    const { name, value } = e.target
    userObject[name] = value
    setUserInfo(prevState => ({ ...prevState, ...userObject }))
  }


  return (
    <div style={styles.loginContainer}>
      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" name="userName" placeholder="Enter a Username" onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="firstName" placeholder="Enter First Name" onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name="lastName" placeholder="Enter Last Name" onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" name="email" placeholder="Enter Email" onChange={handleChange}/>
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" name="password" placeholder="Password" onChange={handleChange}/>
        </Form.Group>
        
        <Button variant="primary" type="submit">
        Submit
        </Button> 
      </Form>
    </div>
  )

}


export default SignUp