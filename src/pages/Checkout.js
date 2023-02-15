import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Checkout = () => {
  return (
    <>
      <Meta title="Checkout" />
      <BreadCrumb title="Checkout" />
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7 bg-white p-5 rounded-3">
              <div className="checkout-left-data">
                <h3 className="website-name">Orange BD</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="#" className="text-dark">
                        Cart
                      </a>
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">
                      <a href="#" className="text-dark">
                        Information
                      </a>
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item">
                      <a href="#" className="text-dark">
                        Shiping
                      </a>
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">
                      <a href="#" className="text-dark">
                        Payment
                      </a>
                    </li>
                  </ol>
                </nav>
                <h4 className="title">Contact Information</h4>
                <p className="user-details">
                  Mohammad Maruf (Mohammadmarufgazi@gmail.com)
                </p>
                <form
                  action=""
                  className="d-flex gap-15  flex-wrap align-items-center"
                >
                  <div className="form-floating w-100">
                    <select
                      className="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>Use A New Address</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <label>Saved Address</label>
                  </div>
                  <div className="form-floating w-100">
                    <select
                      className="form-select"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>Bangladesh</option>
                      <option value="1">India</option>
                      <option value="2">Pakistan</option>
                      <option value="3">Srilanka</option>
                    </select>
                    <label>Country or Region</label>
                  </div>
                  <div className="w-100 d-flex gap-15">
                    <div className="w-100">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="First Name (Optional)"
                        />
                        <label>First Name (Optional)</label>
                      </div>
                    </div>
                    <div className="w-100">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="Last Name"
                        />
                        <label>Last Name</label>
                      </div>
                    </div>
                  </div>
                  <div className="w-100">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Address"
                      />
                      <label>Address</label>
                    </div>
                  </div>
                  <div className="w-100">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Partment, suite, etc (Optional)"
                      />
                      <label>Partment, suite, etc (Optional)</label>
                    </div>
                  </div>
                  <div className="d-flex gap-15  w-100 justify-content-between">
                    <div className="form-floating mb-3 w-100">
                      <input
                        type="text"
                        className="form-control "
                        id="floatingInput"
                        placeholder="City"
                      />
                      <label>City</label>
                    </div>
                    <div className="form-floating w-100">
                      <select
                        className="form-select"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                      >
                        <option selected>Chandpur</option>
                        <option value="1">Dhaka</option>
                        <option value="2">Chittagong</option>
                        <option value="3">Cumilla</option>
                      </select>
                      <label>Bangladesh</label>
                    </div>
                    <div className="form-floating mb-3 w-100">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Zip"
                      />
                      <label>City</label>
                    </div>
                  </div>
                  <div className="d-flex w-100 justify-content-between align-items-center">
                    <div>
                      <Link to="/cart" className="text-dark mb-0">
                        <IoIosArrowBack /> Returns To Cart{" "}
                      </Link>
                    </div>
                    <div>
                      <button className=" btn-danger btn color-light py-3">
                        Countunu To Shiping
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex gap-15 align-items-center">
                  <div className="d-flex align-items-center gap-15">
                    <div className="w-30">
                      <img
                        src="/images/watch.jpg"
                        className="img-fluid rounded-2"
                        alt="watch"
                      />
                    </div>
                    <div className="w-70">
                      <h5 className="title fs-5">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Esse, ex!
                      </h5>
                      <p className="mb-0 fs-12 text-muted ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        A, corrupti!
                      </p>
                    </div>
                  </div>
                  <div className="flex-grow-1 ">
                    <h5 className="fs-7">$100</h5>
                  </div>
                </div>
                <div className="d-flex my-4 gap-15 align-items-center">
                  <div className="d-flex align-items-center gap-15">
                    <div className="w-30">
                      <img
                        src="/images/watch.jpg"
                        className="img-fluid rounded-2"
                        alt="watch"
                      />
                    </div>
                    <div className="w-70">
                      <h5 className="title fs-5">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Esse, ex!
                      </h5>
                      <p className="mb-0 fs-12 text-muted ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        A, corrupti!
                      </p>
                    </div>
                  </div>
                  <div className="flex-grow-1 ">
                    <h5 className="fs-7">$100</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p>Subtotal</p>
                  <p> $200.00</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0">Shiping</p>
                  <p className="mb-0"> $2000.00</p>
                </div>
              </div>
              <div className="d-flex py-4 border-bottom justify-content-between align-items-center">
                <h4>Total</h4>
                <h5> $ 10000</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
