import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div>
            <Header></Header>
            <div sticky='top' className="container1 contact-text  my-4 rounded rounded-3 border-0">
                <div className="carousel-inner ">
                  <div className="carousel-item active ">
                      <div className="row p-2  bg-gradient d-flex align-items-center" >
                         <div className="col-lg-7 ">
                            <h1 className="text text-dark">Contact</h1>
                                <p ><i>Every website needs a contact page because, over the years, the contact page has become one of the most expected and most visited pages on a website. The contact page is usually used to share contact information, location information, and social media information.<small><p style={{color:"#043952"}}>_nursing_Authority</p></small></i></p> 
                         </div>
                         <div className="col-lg-5">
                            <img src="https://image.freepik.com/free-photo/smiling-woman-headset-presentation-something_329181-11710.jpg" className="d-block banner-img" alt="..."/>
                         </div>
                  </div>
                </div>
              </div>
         </div>
         <div sticky='top' className='contact-text'>
             <h1>𝒞𝑜𝓃𝓉𝒶𝒸𝓉 𝒰𝓈</h1> <br /><br />
             <p>Contact us today to arrange free, no-obligation care consultation for you or your loved one.</p>
             <p>Please fill out the form below. Our caring, capable, knowledgeable team are ready and willing to answer any questions or concerns you may have and will get back to you shortly.</p>
         </div>


        <div className="row contact-img my-5 px-5">
           
            <div className="col-lg-4 col-md-4 row1 col-sm-4">
                    <img src="https://media.istockphoto.com/photos/new-offices-picture-id137539172?s=612x612" className='img-fluid' alt="" />
                    <h3>Mahachaipetcharat Hospital</h3>
                <p className='text-center'><img style={{width:'50px', height:'50px', }} src="https://cdn-icons.flaticon.com/png/512/3567/premium/3567405.png?token=exp=1634742548~hmac=4c44843ab99568769d94d3fa5b75b47d" alt="" /></p>
                
                <p className='text-center'> 'D' block, BSMMU, Japan</p>
                <h5 className='text-center'>Japan</h5>
                < p className='text-center'><i className="far fa-envelope"></i> japan@gamil.com</p>
                <p className='text-center'><i className="fas fa-phone"></i>+01 32787 3232</p>
                <p  className='text-center'> <i className="fas fa-globe-europe"></i>     www.saveo.com</p>
            </div>
            <div className="col-lg-4 col-md-4 row1 col-sm-4">
                <img src="https://media.istockphoto.com/photos/modern-hospital-building-picture-id1312706413" className='img-fluid' alt="" />
                <h3 className='text-center'>Our Main Office</h3>
                <p className='text-center'><img style={{width:'50px', height:'50px', }} src="https://cdn-icons-png.flaticon.com/512/3063/3063176.png" alt="" /></p>
                <p className='text-center'>Chicago, China</p>
                <h5 className='text-center'>China</h5>
                < p className='text-center'><i className="far fa-envelope"></i> china@gamil.com</p>
                <p className='text-center'><i className="fas fa-phone"></i>+01 32787 3232</p>
                <p  className='text-center'> <i className="fas fa-globe-europe"></i>     www.saveo.com</p>
            </div>
            <div className="col-lg-4 col-md-4 row1 col-sm-4">
                <img src="https://image.freepik.com/free-photo/large-modern-office-building_1127-3072.jpg" className='img-fluid' alt="" />
                <h3  className='text-center'>Japan East West Medical Collage Hospital</h3>
                <p className='text-center'><img style={{width:'50px', height:'50px', }} src="https://cdn-icons.flaticon.com/png/512/3567/premium/3567405.png?token=exp=1634742548~hmac=4c44843ab99568769d94d3fa5b75b47d" alt="" /></p>
                <p className='text-center'> Shin Shin Japan, Japan</p>
                <p className='text-center'>Japan</p>
                < p className='text-center'><i className="far fa-envelope"></i> japan@gamil.com</p>
                <p className='text-center'><i className="fas fa-phone"></i>+01 32787 3232</p>
                <p  className='text-center'> <i className="fas fa-globe-europe"></i>     www.saveo.com</p>
            </div>
        </div>
        <div class="container cont">
            <h3>Write your information</h3>
  <form action="action_page.php">

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="australia"> Bangladesh</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
      <option value="usa">Australia</option>
      <option value="usa">India</option>
      <option value="usa">China</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>

    <input type="submit" value="Submit"/>

  </form>
  </div>

            <Footer></Footer>
        </div>
    );
};

export default ContactUs;