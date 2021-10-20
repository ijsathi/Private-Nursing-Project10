import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import OurServices from './Pages/OurServices/OurServices';
import OurDoctors from './Pages/OurDoctors/OurDoctors';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import NotFound from './components/NotFound/NotFound';
import More from './Pages/More/More';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="">
      <AuthProvider>
      <Router>
       <Switch>
         <Route exact path='/'>
           <Home></Home>
         </Route>
         <Route path='/home'>
           <Home></Home>
         </Route>
         <PrivateRoute path='/ourservices'>
           <OurServices></OurServices>
         </PrivateRoute>
         {/* <PrivateRoute path='ourdoctors'>
         <OurDoctors></OurDoctors>
         </PrivateRoute> */}
         <PrivateRoute path='/ourdoctors'>
            <OurDoctors></OurDoctors>
         </PrivateRoute>
         <Route path='/aboutus'>
           <AboutUs></AboutUs>
         </Route>
         <Route path='/contactus'>
            <ContactUs></ContactUs>
         </Route>
         <Route path='/more/:serviceId'>
            <More></More>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/signin'>
            <SignUp></SignUp>
          </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
     </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
