import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authcontext";
import { useContext } from "react";
const Headers = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  if (auth.isLoggedIn) {
    navigate("/landingpage");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {!auth.isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            )}
          </ul>

          {!auth.isLoggedIn && (
            <div className="rightside">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item1">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item1">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Headers;

{
  /* <ul>
  {!auth.isLoggedIn && (
    <li>
      <NavLink to="/login">Login</NavLink>
    </li>
  )}

  {!auth.isLoggedIn && (
    <li>
      <NavLink to="register">Register</NavLink>
    </li>
  )}
</ul>; */
}
