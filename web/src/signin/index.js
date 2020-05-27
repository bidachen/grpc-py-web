import React, { Component } from "react";
import { SignUpLink } from "../signup";
import { Link} from 'react-router-dom';
const SignInPage = () => (
    <div style={{ textAlign: "center", paddingTop: "6rem" }}>
        <h1>SignIn</h1>
        <SignInForm />
        <SignUpLink />
    </div>
);
const INITIAL_STATE = {
    email: "",
    password: "",
    error: null,
};
class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    signIn = async () => {
        const { email, password } = this.state;
        await fetch('http://127.0.0.1:5000/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify(
                { email, password })
        })
            .then((res) => {
                alert(res.statusText)
                this.setState({ ...INITIAL_STATE });
            })
            .catch((error) => {
                this.setState({ error });
            });
    };

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === "" || email === "";
        return (
            <div>
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <br />
                <input
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <br />
                <button disabled={isInvalid} onClick={this.signIn} type="submit">
                    Sign In
        </button>
                {error && <p>{error.message}</p>}
            </div>
        );
    }
}

const SignInLink = () => (
    <p>
        <Link to={'/signin'}>Sign In</Link>
    </p>
);
export default SignInPage;
export { SignInLink };