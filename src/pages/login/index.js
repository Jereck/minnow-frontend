import React, {useState} from "react";
import {Form, Button} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { LOGIN_REQUEST } from './constants'

// import { ReactComponent as Logo } from "../../assets/instagram.svg";
// import "./login.css";
// import { connect } from "react-redux";
// import { login } from "../../redux/action/login.action";


const styles = {
  loginContainer: {
    margin: 25,
    display: 'flex',
    justifyContent: 'center'
  }

}


const Login = () => {
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  const dispatch = useDispatch()


  const handleSubmit = e => {
    e.preventDefault()
    dispatch({type: LOGIN_REQUEST, payload: {userName, password}})
  }

  const handleChange = e => {
    const { name, value } = e.target;
    name === "username" ? setUserName(value) : setPassword(value)
    console.log(userName)
    console.log(password)
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

// const mapDispatchToProps = dispatch => ({
//   login: isLogin => dispatch(login(isLogin))
// });
// export default connect(
//   null,
//   mapDispatchToProps
// )(Login);

export default Login