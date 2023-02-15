import React, { useState } from "react";

import { BiGitCompare } from "react-icons/bi";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import ReactImageZoom from "react-image-zoom";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";

const SingleProduct = () => {
  const [orderProduct, setOrderProduct] = useState(true);
  const props = {
    width: 400,

    height: 250,
    zoomWidth: 500,
    img: "https://cdn11.bigcommerce.com/s-uok04hg6nb/images/stencil/1280w/carousel/30/Formex_Essence_LEGGERA_Automatic_Chronometer_1.jpg?",
  };
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      <Meta title="Product Name" />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div className="images">
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    className="img-fluid"
                    src="https://cdn11.bigcommerce.com/s-uok04hg6nb/images/stencil/1280w/carousel/30/Formex_Essence_LEGGERA_Automatic_Chronometer_1.jpg?c=1"
                    alt="watch"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="https://media.wired.co.uk/photos/619f87d7424af1246ccd28d6/master/w_1600%2Cc_limit/25112021_BW_02.jpg"
                    alt="watch"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="https://cdn.thewirecutter.com/wp-content/media/2022/09/smartwatches-2048px-0S1A2654.jpeg?auto=webp&quality=75&width=1024"
                    alt="watch"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="https://www.icreatemagazine.nl/app/uploads/2022/09/apple-event-apple-watch_8_2.png"
                    alt="watch"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-porduct-details">
                <div className="border-bottom">
                  <h3 className="title py-3">
                    Kids Headphones Bulk 10 Pack Multi Color For Student{" "}
                  </h3>
                </div>
                <div className="border-bottom">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">(2 Reviews)</p>
                  </div>
                  <a href="#review" className="review-btn">
                    Write a reviews
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading  mb-0">Type :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading  mb-0">Brand :</h3>
                    <p className="product-data">Havels</p>
                  </div>
                  <div className="d-flex gap-10 align-items- my-2">
                    <h3 className="product-heading  mb-0">Category :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading  mb-0">Tags :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading mb-0">Availablity :</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column my-2">
                    <h3 className="product-heading mb-0">Size :</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border-1 bg-white text-dark border">
                        S
                      </span>
                      <span className="badge border-1 bg-white text-dark border">
                        M
                      </span>
                      <span className="badge border-1 bg-white text-dark border">
                        XL
                      </span>
                      <span className="badge border-1 bg-white text-dark border">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column my-2">
                    <h3 className="product-heading mb-0 mt-2">Color :</h3>
                    <Color />
                  </div>
                  <div className="d-flex gap-15 flex-row my-2 align-items-center">
                    <h3 className="product-heading mb-0">Quantity :</h3>
                    <div>
                      <input
                        className="form-control mb-0"
                        min={1}
                        max={10}
                        type="number"
                        name="quantity"
                        style={{ width: "70px" }}
                      />
                    </div>
                    <div>
                      <div className="d-flex justify-content-center gap-15 align-items-center">
                        <button className="button border-0" type="submit">
                          ADD TO CARD
                        </button>
                        <button className="button signup border-0">
                          Buy it now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a className="me-2 mt-2">
                        <BiGitCompare /> Add to Compaire{" "}
                      </a>
                    </div>
                    <div>
                      <a className="me-2 mt-2">
                        <BsFillBookmarkHeartFill /> Add to Wishlist
                      </a>
                    </div>
                  </div>
                  <div className="  gap-10 align-items-center my-2">
                    <h3 className="product-heading  mb-0">
                      Shiping & Returns :
                    </h3>
                    <p className="product-data">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus facere quas tempore nam! Placeat atque ullam
                      tempore quidem illo odit.
                    </p>
                  </div>
                  <div className=" gap-10 d-flex  align-items-center my-3">
                    <h3 className="product-heading  mb-0">Product Link :</h3>
                    <a
                      href="javascript:void(0);"
                      onClick={() =>
                        copyToClipboard(
                          "https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg"
                        )
                      }
                    >
                      Copy Product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4 className="py-3">Description</h4>
              <div className="bg-white rounded-3 shadow-sm description p-3">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto maxime eligendi, quae accusamus laudantium porro
                  odio voluptatibus? Facilis hic at sequi atque, nemo
                  praesentium accusantium eligendi dolorum inventore nisi
                  veritatis iure voluptas sit magni quo maxime quod voluptate
                  nesciunt odio possimus a quas dolores vel modi? Dignissimos
                  optio voluptatibus delectus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="py-3">Reviews</h3>
              <div className="review-inner-wrapper shadow-sm rounded-3">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customar Review</h4>
                    <div className="d-flex align-items-center  gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 review</p>
                    </div>
                  </div>
                  {orderProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href="/"
                      >
                        Write a review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write a review</h4>
                  <form action="" className="d-flex  flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={true}
                        activeColor="#ffd700"
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
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews">
                  <div className="review py-3">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Maruf</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Provident reprehenderit quod voluptatibus libero
                      repudiandae! Odit reiciendis assumenda rerum nesciunt
                      tempora, eligendi debitis enim optio consectetur non iste
                      placeat deleniti nisi. Laborum at ipsum assumenda sequi?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wraper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Product</h3>
            </div>
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
