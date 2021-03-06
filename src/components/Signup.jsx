import React, { useRef, useState }  from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
 
const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
      e.preventDefault()

      if (passwordRef.current.value !== 
        passwordConfirmRef.current.value) {
          return setError('Passwords do not match')
        }
        try {
          setError('')
          setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value)
          history.push("/")

        } catch (error) {
          setError('Fail! Password length must > 6 characters')
        }
      setLoading(false)
    }

    return (
        <>
          <Card>
              <Card.Body>
                  <h2 className="text-center mb-4">Sign Up</h2>
                      {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                          <Form.Label>password</Form.Label>
                          <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                          <Form.Label>password confirmation</Form.Label>
                          <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                        
                    </Form>
                </Card.Body>
              </Card>
            <div className="w-100 text-center mt-2">
              Already have an account? <Link to="/login">Login Here</Link>
            </div>
            <div className="w-100 text-center mt-2">
              <Link to="/home">Return to home page</Link>
            </div>
        </>
    )
}

export default Signup