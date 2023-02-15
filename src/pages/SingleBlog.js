import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
const SingleBlog = () => {
  return (
    <>
      <Meta title="Dynamic Blog Name" />
      <BreadCrumb title="Dynamic Blog Name" />

      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src="/images/blog-1.jpg"
                  className="img-fluid w-100 my-4"
                  alt="blog"
                />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Porro, commodi quidem magnam totam aperiam laboriosam repellat
                  debitis iste enim sapiente cupiditate facilis. Voluptatibus
                  rerum sequi error voluptates quidem aperiam, expedita totam
                  quam perferendis eaque cum similique accusamus omnis a
                  architecto quo nisi aliquam nesciunt accusantium. Libero
                  accusamus accusantium, dolores ab vitae iusto perferendis?
                  Impedit quibusdam laborum repellat doloremque non doloribus,
                  vitae dignissimos reiciendis repellendus excepturi quae,
                  distinctio, dolore quod! Exercitationem et quod quam similique
                  fugiat, iusto incidunt, voluptatum eaque alias debitis tempore
                  rerum. Ut fuga voluptatum dolores nulla totam eligendi
                  distinctio illo dolore accusantium, alias in fugit vel facere
                  numquam?
                </p>
                <Link to="/blogs" className="d-flex align-items-center gap-10 ">
                  {" "}
                  <BiArrowBack /> Go back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
