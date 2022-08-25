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
          Ez Career
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
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link active dropdown-toggle"
                      to="/loginroles"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Login
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/login">
                          Login As Employee
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/loginemployer">
                          Login as Employer
                        </Link>
                      </li>
                    </ul>
                  </li>
                </li>
                <li className="nav-item1">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link active dropdown-toggle"
                      to="/loginroles"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Register
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/register">
                          Register As Employee
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/registeremployer">
                          Register as Employer
                        </Link>
                      </li>
                    </ul>
                  </li>
                </li>
                <li className="nav-item1">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/images"
                  >
                    Form
                  </Link>
                </li>

                <li className="nav-item1">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/formd"
                  >
                    Form
                  </Link>
                </li>
                <li className="nav-item">
                  <div id="google_translate_element"></div>
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
