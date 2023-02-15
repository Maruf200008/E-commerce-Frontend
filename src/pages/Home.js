import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BlogsCard from "../components/BlogsCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

function Home() {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner w-100 position-relative">
                <img
                  src="/images/main-banner-1.jpg"
                  alt="Main banner"
                  className="rounded-3 img-fluid"
                />
                <div className="main-banner-containt position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>
                    Lorem ipsum dolor sit amet, <br /> adipisicing elit.
                  </p>
                  <Link className="button"> BY NOW </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between gap-10 align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="/images/catbanner-01.jpg"
                    alt="Main banner"
                    className="rounded-3 img-fluid"
                  />
                  <div className="small-banner-containt position-absolute">
                    <h4>Best Sale</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $999.00 <br /> or $4162/mo.{" "}
                    </p>
                  </div>
                </div>
                <div className="small-banner  position-relative">
                  <img
                    src="/images/catbanner-02.jpg"
                    alt="Main banner"
                    className="rounded-3 img-fluid"
                  />
                  <div className="small-banner-containt position-absolute">
                    <h4>New Arrival</h4>
                    <h5>But IPad Air</h5>
                    <p>
                      From $999.00 <br /> or $4162/mo.{" "}
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="/images/catbanner-03.jpg"
                    alt="Main banner"
                    className="rounded-3 img-fluid"
                  />
                  <div className="small-banner-containt position-absolute">
                    <h4>New Arrival</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $999.00 <br /> or $4162/mo.{" "}
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="/images/catbanner-04.jpg"
                    alt="Main banner"
                    className="rounded-3 img-fluid"
                  />
                  <div className="small-banner-containt position-absolute">
                    <h4>New Arrival</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $999.00 <br /> or $4162/mo.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="service d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service.png" alt="services" />
                  <div>
                    <h6>Free Shiping</h6>
                    <p className="mb-0">From all order over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprise Offer</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get factory default price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className="mb-0">100% procted payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="catagories  shadow d-flex align-items-center flex-wrap justify-content-between">
                <div className="d-flex gap-30 align-items-center px-20">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src="/images/tv.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Smart Headphone</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src="/images/headphone.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src="/images/tv.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Smart Headphone</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src="/images/headphone.jpg" alt="Camera" />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wraper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading ">Special Product</h3>
            </div>
          </div>
          <div className="row ">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>

      <section className="famous-wraper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-1.jpg"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Serice 7+</h6>
                  <p>Lorem ipsum dolor, sit amet.</p>
                </div>
              </div>
            </div>
            <div className="col-3 ">
              <div className="famous-card position-relative shadow-sm">
                <img
                  src="images/famous-2.jpg"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute ">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">600 nits of brightness</h6>
                  <p className="text-dark">Lorem ipsum dolor, sit amet.</p>
                </div>
              </div>
            </div>
            <div className="col-3 ">
              <div className="famous-card position-relative shadow-sm">
                <img
                  src="images/famous-3.jpg"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute ">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Smartphone 13 Pro</h6>
                  <p className="text-dark">Lorem ipsum dolor, sit amet.</p>
                </div>
              </div>
            </div>
            <div className="col-3 ">
              <div className="famous-card position-relative shadow-sm">
                <img
                  src="images/famous-4.jpg"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute ">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">Room-filling sound. </h6>
                  <p className="text-dark">Lorem ipsum dolor, sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wraper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading ">Our Popular Products</h3>
            </div>
          </div>
          <div className="row ">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>

      <section className="marque-wraper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wraper card-wraper shadow">
                <Marquee className="d-flex ">
                  <div className="mx-4 w-10">
                    <img src="/images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-10">
                    <img src="/images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-10">
                    <img src="/images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-10">
                    <img src="/images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-10">
                    <img src="/images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-10">
                    <img src="/images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-10">
                    <img src="/images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-10">
                    <img src="/images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-wraper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="blog-wraper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogsCard />
            </div>
            <div className="col-3">
              <BlogsCard />
            </div>
            <div className="col-3">
              <BlogsCard />
            </div>
            <div className="col-3">
              <BlogsCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
