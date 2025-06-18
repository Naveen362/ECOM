// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container text-center">
        <h2>Aadai🛍️</h2>

        <div className="row">
          <div className="col-md-4 mb-3">
           
            <h5>Happy Shopping</h5>
            <ul className="list-unstyled">
              <li><a href="#about" className="text-decoration-none text-light">About Us📑</a></li>
              <li><a href="#careers" className="text-decoration-none text-light">Careers</a></li>
              <li><a href="#blog" className="text-decoration-none text-light">Blog⚙️</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><a href="#contact" className="text-decoration-none text-light">Contact-Us -9603711147</a></li>
              <li><a href="#help" className="text-decoration-none text-light">Help Centerℹ️</a></li>
              <li><a href="#privacy" className="text-decoration-none text-light">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <a href="https://facebook.com" className="me-2 text-light"><i className="bi bi-facebook"></i> Facebook</a><br />
            <a href="https://twitter.com" className="me-2 text-light"><i className="bi bi-twitter"></i> Twitter</a><br />
            <a href="https://instagram.com" className="text-light"><i className="bi bi-instagram"></i> Instagram</a>
          </div>
        </div>
         <h5 className='text-primary'>Contact-details📞 :+91 9603711147</h5>
        <hr className="bg-light" />
        <p className="mb-0">&copy; {new Date().getFullYear()} Aadai🛍️. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
