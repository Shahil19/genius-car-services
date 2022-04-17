import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const registerUser = event => {
        event.preventDefault();
        const email = event.target.email.value;
        setEmail(email);
    }

    console.log(email);
    return (
        <section className='w-50 mx-auto'>
            <h3 className='text-center'>Please Register</h3>
            <Form onSubmit={registerUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' name="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>Already have an account? <Link to='/login' className='text-danger text-decoration-none' >Log in</Link> </p>
            </Form>
        </section >
    );
};

export default Register;