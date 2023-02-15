import React from "react";
import { Link } from "react-router-dom";

function BlogsCard() {
  return (
    <div className="blog-card">
      <div className="card-img">
        <img src="/images/blog-1.jpg" alt="blog" className="img-fluid w-100" />
      </div>
      <div className="blog-containt">
        <p className="date">25 Jan, 2023</p>
        <h5 className="title">A beautiful sunday morning renaissance</h5>
        <p className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogsCard;
