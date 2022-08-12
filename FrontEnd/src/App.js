import Headers from "./components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { AuthContext } from "./context/authcontext";
import { useCallback, useId, useState, useEffect } from "react";
import Search from "./components/Home/search";
import Addprevjobs from "./components/LandingPage/Addprevjobs";
import Landingpage from "./components/LandingPage/Landingpage";
import Profile from "./components/Profile/profile";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setuserId] = useState("");

  const login = useCallback((uid) => {
    localStorage.setItem("userid", uid);
    setIsLoggedIn(true);
    setuserId(localStorage.getItem("userid"));
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setuserId(null);
  }, []);

  useEffect(() => {
    if (localStorage.hasOwnProperty("userid")) {
      setuserId(localStorage.getItem("userid"));
      setIsLoggedIn(true);
    }
  }, []);

  let routes;
  if (isLoggedIn) {
    routes = (
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Headers />
                <Search />
              </>
            }
          ></Route>
          <Route
            exact
            path="/Home"
            element={
              <>
                <Headers />
                <Search />
              </>
            }
          ></Route>
          <Route path="/landingpage" element={<Landingpage />}></Route>
          <Route path="/profile" element={<Profile />}></Route>

          <Route
            exact
            path="/addpreviousjobs"
            element={<Addprevjobs />}
          ></Route>
        </Routes>
      </Router>
    );
  } else {
    routes = (
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Headers />
                <Search />
              </>
            }
          ></Route>
          <Route
            exact
            path="/Home"
            element={
              <>
                <Headers />
                <Search />
              </>
            }
          ></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <main>{routes}</main>
    </AuthContext.Provider>
  );
}

export default App;
