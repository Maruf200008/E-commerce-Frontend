import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Meta from "../components/Meta";

const CompireProduct = () => {
  return (
    <>
      <Meta title="Compire Product" />
      <BreadCrumb title="Compire Product" />
      <div className="compire-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compire-product-card position-relative">
                <img
                  src="/images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-item">
                  <img src="/images/watch.jpg" alt="watch" />
                </div>
                <div className="compaire-product-detail">
                  <h5 className="title">
                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablat
                  </h5>
                  <h6 className="price mt-3">$ 100</h6>
                </div>
                <div className="product-detail">
                  <h5>Brand :</h5>
                  <p>Havels</p>
                </div>
                <div className="product-detail">
                  <h5>Type :</h5>
                  <p>Watch</p>
                </div>
                <div className="product-detail">
                  <h5>Availablity :</h5>
                  <p>In Stock</p>
                </div>
                <div className="product-detail">
                  <h5>Color :</h5>
                  <Color />
                </div>
                <div className="product-detail">
                  <h5>Size :</h5>
                  <div className="d-flex gap-10">
                    <p>S</p>
                    <p>M</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compire-product-card position-relative">
                <img
                  src="/images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-item">
                  <img src="/images/watch.jpg" alt="watch" />
                </div>
                <div className="compaire-product-detail">
                  <h5 className="title">
                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablat
                  </h5>
                  <h6 className="price mt-3">$ 100</h6>
                </div>
                <div className="product-detail">
                  <h5>Brand :</h5>
                  <p>Havels</p>
                </div>
                <div className="product-detail">
                  <h5>Type :</h5>
                  <p>Watch</p>
                </div>
                <div className="product-detail">
                  <h5>Availablity :</h5>
                  <p>In Stock</p>
                </div>
                <div className="product-detail">
                  <h5>Color :</h5>
                  <Color />
                </div>
                <div className="product-detail">
                  <h5>Size :</h5>
                  <div className="d-flex gap-10">
                    <p>S</p>
                    <p>M</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompireProduct;
