import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

function ProductCard({ grid }) {
  const location = useLocation();

  return (
    <>
      <div
        className={`${
          location.pathname === "/store" ? `gr-${grid}` : `col-3`
        } `}
      >
        <Link
          to="/product/:id"
          className="product-card shadow-sm position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <Link>
              {" "}
              <img src="/images/wish.svg" alt="" />
            </Link>
          </div>
          <div className="product-img">
            <img src="/images/watch.jpg" alt="Product" className="img-fluid" />
            <img
              src="/images/watch-1.jpg"
              alt="Product"
              className="img-fluid"
            />
          </div>
          <div className="product-deatils">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for student
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`desc ${grid === 12 ? "d-block" : "d-none"} `}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              cupiditate unde porro veniam ullam vitae assumenda nesciunt, iste
              iusto odio!
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="/images/prodcompare.svg" alt="Compare" />
              </Link>
              <Link>
                <img src="/images/view.svg" alt="View" />
              </Link>
              <Link>
                <img src="/images/add-cart.svg" alt="Add Card" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/store" ? `gr-${grid}` : `col-3`
        } `}
      >
        <Link
          to="/product/:id"
          className="product-card shadow-sm position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <Link>
              {" "}
              <img src="/images/wish.svg" alt="" />
            </Link>
          </div>
          <div className="product-img">
            <img src="/images/watch.jpg" alt="Product" className="img-fluid" />
            <img
              src="/images/watch-1.jpg"
              alt="Product"
              className="img-fluid"
            />
          </div>

          <div className="product-deatils">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for student
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`desc ${grid === 12 ? "d-block" : "d-none"} `}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              cupiditate unde porro veniam ullam vitae assumenda nesciunt, iste
              iusto odio!
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="/images/prodcompare.svg" alt="Compare" />
              </Link>
              <Link>
                <img src="/images/view.svg" alt="View" />
              </Link>
              <Link>
                <img src="/images/add-cart.svg" alt="Add Card" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
