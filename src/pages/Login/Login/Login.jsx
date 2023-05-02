import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/category/0'
    // console.log("login page location", location);

    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value
        console.log(email, password);
        setError('')
        setSuccess('')


        signIn(email, password)
            .then((userCredential) => {
                const loggedUser = userCredential.user;
                console.log(loggedUser);
                setSuccess('User logged Successfully')
                event.target.reset()
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode, errorMessage)
            });
    }

    return (
        <Container className='w-50 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name='email'
                        placeholder="Enter email"
                        required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Type your Password"
                        name='password'
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't have an account?<Link to="/register">Register</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-success">
                    {success}
                </Form.Text>

                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;