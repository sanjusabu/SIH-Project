import Headers from "./components/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { AuthContext } from "./context/authcontext";
import { useCallback, useState } from "react";
import Search from "./components/Home/search";
import Addprevjobs from "./components/LandingPage/Addprevjobs";
import Landingpage from "./components/LandingPage/Landingpage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setuserId] = useState("");

  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setuserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setuserId(null);
  }, []);

  let routes;
  if (isLoggedIn) {
    routes = (
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
        <Route exact path="/landingpage" element={<Landingpage />}></Route>
        <Route exact path="/addpreviousjobs" element={<Addprevjobs />}></Route>
      </Routes>
    );
  } else {
    routes = (
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
