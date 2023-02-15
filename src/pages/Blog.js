import React from "react";
import BlogsCard from "../components/BlogsCard";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

function Blog() {
  return (
    <>
      <Meta title="Blogs" />
      <BreadCrumb title="Blogs" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Find By Catagories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-6 mb-3">
                  <BlogsCard />
                </div>
                <div className="col-6 mb-3">
                  <BlogsCard />
                </div>
                <div className="col-6 mb-3">
                  <BlogsCard />
                </div>
                <div className="col-6 mb-3">
                  <BlogsCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
