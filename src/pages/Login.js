import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

export const Login = () => {
  return (
    <>
      <Meta title="Login" />
      <BreadCrumb title="Login" />
      <div className="login-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <div className="auth-card shadow-sm ">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column  gap-15">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    className="from-control w-100 px-2 py-2"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    className="from-control  w-100 px-2 py-2 "
                  />
                </div>
                <div>
                  <Link to="/forget-password" className="mb-3 ">
                    Forget Password?
                  </Link>
                  <div className="d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    <Link to="/signup" className="button signup">
                      Signup
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
