import React from "react";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { MdAddIcCall } from "react-icons/md";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

function Contact() {
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29331.76131345844!2d90.64319335088413!3d23.225972075652148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754fcef10574867%3A0x98bef50733e9a1b3!2sChandpur!5e0!3m2!1sen!2sbd!4v1675842256069!5m2!1sen!2sbd"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="mail"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        className="w-100 form-control"
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">
                    Get in the touch with us
                  </h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FaHome className="fs-5" />
                        <address className="mb-0">
                          Hno : Near Outer Stadiam, Chandpur
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <MdAddIcCall className="fs-5" />
                        <a href="tel:+8801648312050">+8801648312050</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <GrMail className="fs-5" />
                        <a href="mailto:mohammadmarufgazi@gmail.com">
                          mohammadmarufgazi@gmail.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BsFillInfoSquareFill className="fs-5" />
                        <p className="mb-0"> Monday - Friday 10 AM - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
