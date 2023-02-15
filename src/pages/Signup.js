import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Signup = () => {
  return (
    <>
      <Meta title="Signup" />
      <BreadCrumb title="Signup" />

      <div className="login-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <div className="auth-card shadow-sm ">
              <h3 className="text-center mb-3">Create Account</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="from-control w-100 px-2 py-2"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="from-control w-100 px-2 py-2"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="from-control w-100 px-2 py-2"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="from-control  w-100 px-2 py-2 "
                  />
                </div>
                <div>
                  <div className="d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Create</button>
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

export default Signup;
