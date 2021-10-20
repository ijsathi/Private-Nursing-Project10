import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { singInUsingGoogle} = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home'

  const handleGoogleLogin = () =>{
    singInUsingGoogle()
    .then(result =>{
      history.push(redirect_uri);
  })
  }
  
    return (
        <div>
          <Header></Header>
            <Form className='w-25 mx-auto'>
              <h2>Please Login</h2>
           <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="....@gmail.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="*******" />
           <Form.Text className="text-muted">
            We'll never share your password with anyone else.
           </Form.Text>
            </Form.Group>
            <Button className='' variant="primary" type="submit">
                                Submit
            </Button>
            </Form>
            <br />
            <p className='d-flex justify-content-center'>-------or-------</p>
          <div className='d-flex justify-content-center'>
           <br />
            <button onClick={handleGoogleLogin} >Google sign in</button>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default Login;