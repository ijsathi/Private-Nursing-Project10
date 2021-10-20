import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const { singInUsingGoogle} = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';

  const handleGoogleLogin = () =>{
    singInUsingGoogle()
    .then(result =>{
      history.push(redirect_uri);
  })
  }
  const auth = getAuth();

  const [email, setEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [err, setErr] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const toggleLogin = even =>{
    setIsLogin(even.target.checked);
  }
  const handleEmailChange = even =>{
    setEmail(even.target.value);
    // setEmail('')
  }
  const handlePasswordChange = even =>{
    SetPassword(even.target.value);
  }
  const handleRegistration = even =>{
    even.preventDefault()
    if(password.length<6){
      setErr('Password must be at least 6 character long.')
      return;
    }
    if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
      setErr('password must contain two upper case')
      return;
    }
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
      const user = userCredential.user;
      history.push(redirect_uri);
      console.log(user);
      setErr('');
    })
    .catch(err =>{
      setErr(err.message)
    })
  }
    return (
        <div>
          <Header></Header>
            <Form onChange={toggleLogin} onSubmit={handleRegistration} className='w-25 mx-auto'>
              <h2>Login</h2>
           <Form.Group className="mb-3 " controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onBlur={handleEmailChange} type="email" placeholder="...@gmail.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control   onBlur={handlePasswordChange} type="password" placeholder="*******" />
           <Form.Text className="text-muted">
            We'll never share your password with anyone else.
           </Form.Text>
            </Form.Group>
            <Button className='' variant="primary" type="submit">
                                Login
            </Button>
            <p><small style={{color:'red'}}>{err}</small></p>
            <input   className='form-check-input' type='checkbox' id='gridCheck1' />
            <label className='form-check-label ' htmlFor='gridCheck1'>
               New User?
            </label>
            {isLogin? <Link to='/login'>sign up</Link>  :true}
            </Form>
            <br />
            <p className='d-flex justify-content-center'>-------or-------</p>
          <div className='d-flex justify-content-center'>
           <br />
            <button onClick={handleGoogleLogin} >Google sign up</button>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default SignUp;