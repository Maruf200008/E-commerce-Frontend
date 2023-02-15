import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

export const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <BreadCrumb title="Cart" />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-detail py-3 d-flex mb-3 justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      className="img-fluid object-fit rounded-2 shadow-sm"
                      src="https://www.01net.com/app/uploads/2022/09/Apple-Watch-Ultra_38.jpg"
                      alt=""
                    />
                  </div>
                  <div className="w-75 mb-0">
                    <h5 className="title text-secondary">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Consequuntur expedita natus facilis molestiae repellendus
                      quasi?
                    </h5>
                    <p className="color text-secondary">Size : 5</p>
                    <p className="size text-secondary">Color : #1c1c1b</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$ 100</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15 fs-5">
                  <div>
                    <input
                      className="form-control w-100"
                      min={1}
                      max={10}
                      type="number"
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <MdDeleteForever className="text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$ 100</h5>
                </div>
              </div>
              <div className="cart-detail py-3 d-flex mb-3 justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      className="img-fluid object-fit rounded-2 shadow-sm"
                      src="https://www.apple.com/newsroom/images/product/watch/standard/Apple-Watch-Family-Setup-220907_big.jpg.large.jpg"
                      alt=""
                    />
                  </div>
                  <div className="w-75 mb-0">
                    <h5 className="title text-secondary">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Consequuntur expedita natus facilis molestiae repellendus
                      quasi?
                    </h5>
                    <p className="color text-secondary">Size : 5</p>
                    <p className="size text-secondary">Color : #1c1c1b</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">$ 100</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15 fs-5">
                  <div>
                    <input
                      className="form-control w-100"
                      min={1}
                      max={10}
                      type="number"
                      name=""
                      id=""
                    />
                  </div>
                  <div>
                    <MdDeleteForever className="text-danger" />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">$ 100</h5>
                </div>
              </div>
              <div className="col-12  py-2 mt-4">
                <div className="d-flex justify-content-between">
                  <div>
                    <Link to="/product/:id" className="button">
                      Countinu To Shoping
                    </Link>
                  </div>
                  <div className="d-flex align-items-end flex-column">
                    <h4>SubTotal : & 1000</h4>
                    <p>Taxes & shiping calculated at checkout</p>
                    <Link to="/checkout" className="button">
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
