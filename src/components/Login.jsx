import React, { useRef, useState }  from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
 
const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const handleSubmit = async (e) => {
      e.preventDefault()

        try {
          setError('')
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          history.push("/")

        } catch (error) {
          console.error('Failed to sign in!')
        }
      setLoading(false)
    }

    return (
        <>
          <Card>
              <Card.Body>
                  <h2 className="text-center mb-4">Log In</h2>
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
                        <Button 
                            disabled={loading} 
                            className="w-100" 
                            type="submit">Login
                        </Button>
                      </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                 </Card.Body>
              </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up here</Link> 
            </div>
            <div className="w-100 text-center mt-2">
              <Link to="/home">Return to home page</Link>
            </div>
        </>
    )
}

export default Login 