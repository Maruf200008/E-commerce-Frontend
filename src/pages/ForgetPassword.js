import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const ForgetPassword = () => {
  return (
    <>
      <Meta title="ForgetPassword" />
      <BreadCrumb title="ForgetPassword" />
      <div className="login-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <div className="auth-card shadow-sm ">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center mb-3 mt-3">
                We will send you an email to reset your password
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    className="from-control w-100 px-2 py-2"
                  />
                </div>

                <div>
                  <div className="d-flex flex-column justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Submit
                    </button>
                    <Link to="/login" className="button cancle">
                      Cancle
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
