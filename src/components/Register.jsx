import React, { useRef, }  from 'react'
import { Form, Card, Button } from 'react-bootstrap'
 
const Register = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    return (
        <>
          <Card>
              <Card.Body>
                  <h2 className="text-center mb-4">Sign UP</h2>
                  <Form>
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
                      <Button className="w-100" type="submit">Sign Up</Button>
                  </Form>
              </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2"></div>
          Already have an account? LOGIN
        </>
    )
}

export default Register