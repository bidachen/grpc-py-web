import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SignInLink } from "../signin";
const SignUpPage = () => (
    <div style={{ textAlign: "center" ,paddingTop: "6rem"}}>
      <h1>Sign Up</h1>
      <SignUpForm />
      <SignInLink />
    </div>
  );

  const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    error: null,
  };


class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  newUser = async () => {
    const {name, email, password} = this.state;
    await fetch('http://127.0.0.1:5000/signup',{
        method: 'POST',
        headers: {'Content-Type': 'text/plain'},
         body: JSON.stringify(
         { name,email,password})
    }).then(res => {
      alert(res.statusText)
    });
  }
  
  render() {
    const {
      name,
      email,
      password,
      error,
    } = this.state;
    const isInvalid =
      email === '' || name === '' || password === '';
    return (
      <div>
        <input
          name="name"
          value={name}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        /><br/>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        /><br/>
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        /><br/>
        <button type="submit" onClick={this.newUser} disabled={isInvalid}>Sign Up</button>
        {error && <p>{error.message}</p>}
      </div>
    )
  }
}
const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={'/signup'}>Sign Up</Link>
  </p>
);

export default SignUpPage;
export { SignUpLink };