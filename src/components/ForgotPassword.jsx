import React, { useRef, useState }  from 'react'
import { Link } from 'react-router-dom'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
 
const ForgotPassword = () => {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
   

    async function handleSubmit(e) {
      e.preventDefault()

        try {
          setMessage('')
          setError('')
          setLoading(true)
          await resetPassword(emailRef.current.value)
          setMessage('Check email for instructions')

        } catch (error) {
          console.error('Failed to reset password!')
        }
      setLoading(false)
    }

    return (
        <>
          <Card>
              <Card.Body>
                  <h2 className="text-center mb-4">Password Reset</h2>
                        {currentUser.email}
                        {error && <Alert variant="danger">{error}</Alert>}
                      <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>

                      <Button disabled={loading} className="w-100" type="submit">Reset Password</Button>
                  </Form>
                  <div className="w-100 text-center mt-3">
                      <Link to="/login">Login</Link>
                  </div>
                  
              </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up here</Link> 
          </div>
        </>
    )
}

export default ForgotPassword 
