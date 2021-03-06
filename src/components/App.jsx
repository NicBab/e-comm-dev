import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { Container} from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext';
import './App.css'
import { 
  Home,
  Dashboard, 
  Signup, 
  Login, 
  ForgotPassword, 
  PrivateRoute, 
  UpdateProfile } from './index'

function App() {

  return (
        // <Container 
        //   className="d-flex align-items-center justify-content-center" 
        //   style={{ minHeight: "100vh"}}>
          <div className="w-100" style={{maxWidth: "400px"}}>
            <Router>
              <AuthProvider>
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <PrivateRoute path="/update-profile" component={UpdateProfile} />
                  <Route path="/home" component={Home} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/forgot-password" component={ForgotPassword} />
                </Switch>
              </AuthProvider>
            </Router>
          </div> 
        // </Container>
    );
}

export default App;
