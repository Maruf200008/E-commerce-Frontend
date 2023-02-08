import React from "react";
import { Link } from "react-router-dom";

function BlogsCard() {
  return (
    <div className="col-3 ">
      <div className="blog-card">
        <div className="card-img">
          <img src="/images/blog-1.jpg" alt="blog" className="img-fluid" />
        </div>
        <div className="blog-containt">
          <p className="date">25 Jan, 2023</p>
          <h5 className="title">A beautiful sunday morning renaissance</h5>
          <p className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Link className="button"> Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogsCard;
