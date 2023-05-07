import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { createUser } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false)
    useTitle('Register')

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const password = form.password.value;
        const email = form.email.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);
        setError('')
        setSuccess('')


        if (password.length < 6) {
            setError('Provide at least six character')
            return;
        }


        createUser(email, password)
            .then((userCredential) => {
                const createdUser = userCredential.user;
                console.log(createdUser);
                setSuccess('User created successfully')
                event.target.reset()
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
        // console.log(event.target.checked);
    }

    return (
        <Container className='w-50 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group
                    className="mb-3"
                    controlId="#formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name='name'
                        placeholder="Your Name"

                        required />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="#formBasicPhoto">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control
                        type="text"
                        name='photo'
                        placeholder="Enter Photo URL"
                        required />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name='email'
                        placeholder="Enter email"
                        required />
                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Type your Password"
                        name='password'
                        required
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        label={<>Accept <Link to='/terms'> Terms & Conditions</Link> </>}
                        name='accept'
                    />
                </Form.Group>

                <Button
                    disabled={!accepted}
                    variant="primary"
                    type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already have an account?<Link to="/login">Login</Link>
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

export default Register;