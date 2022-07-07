import React, { useRef, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';

function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { signin, signout, currentUser } = useAuth();
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            alert('Las contraseñas no coinciden');
            return;
        }
        try {
            setLoading(true);

            await signin(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert('Error al crear el usuario');
        }
        setLoading(false);
    }

    async function hanldeLogOut() {
        await signout();
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Sign Up</h2>
                    {currentUser && currentUser.email}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} placeholder='Enter email' required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} placeholder='Enter password' required />
                        </Form.Group>
                        <Form.Group id="confirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type='password' ref={confirmPasswordRef} placeholder='Confirm password' required />
                        </Form.Group>
                        <Button disabled = {loading} className='w-100' type='submit'>Login</Button>
                    </Form>
                </Card.Body>
            </Card>
            <Button onClick = {hanldeLogOut}>Logout</Button>
            <div className='w-100 text-center mt-2'>
                <small>Already have an account? <a href='/login'>Login</a></small>
            </div>
        </>
    )
}

export default SignUp