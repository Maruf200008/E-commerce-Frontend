import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="/images/newsletter.png" alt="Newsletter" />
                <h2 className="mb-0 text-white">Sign up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3"> Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-3">Contact Us</h4>
              <div>
                <address className="text-white">
                  Hno : 277 Near Outer Stadiam, <br />
                  Post Code : 3600 <br />
                  Chandpur, Bangladesh
                </address>
                <a
                  href="tel: +8801648312050"
                  className="mt-2 d-block mb-2 text-white"
                >
                  +88016483-12050
                </a>
                <a
                  href="mailto: mohammadmarufgazi@gmail.com"
                  className="mt-4 d-block mb-1 text-white"
                >
                  mohammadmarufgazi@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a href="https://www.facebook.com/profile.php?id=100088210389764">
                    <BsFacebook className="text-white fs-5" />
                  </a>
                  <a href="https://github.com/Maruf200008">
                    <BsGithub className="text-white fs-5" />
                  </a>
                  <a href="#">
                    <BsInstagram className="text-white fs-5" />
                  </a>
                  <a href="#">
                    <BsYoutube className="text-white fs-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privcy-policy" className="text-white py-2 mb-1">
                  Privacy Police
                </Link>
                <Link to="/refound-policy" className="text-white py-2 mb-1">
                  Refound Police
                </Link>
                <Link to="/shoping-policy" className="text-white py-2 mb-1">
                  Shoping Police
                </Link>
                <Link to="/terms-condition" className="text-white py-2 mb-1">
                  Terms & Conditions
                </Link>
                <Link to="/blogs" className="text-white py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link to="/contact" className="text-white py-2 mb-1">
                  Contact{" "}
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Link</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptop</Link>
                <Link className="text-white py-2 mb-1">Headphone</Link>
                <Link className="text-white py-2 mb-1">Tablate</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                {" "}
                @copy : {new Date().getFullYear()} Powered by Mohammad Maruf
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
