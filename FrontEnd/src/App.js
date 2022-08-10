import Headers from "./components/header/header";
import {Route,Redirect, Switch} from 'react-router-dom'
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { AuthContext } from "./context/authcontext";
import {useCallback,useState} from 'react'
import Search from "./components/Home/search";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId,setuserId] = useState('');

  const login = useCallback((uid) => {
    setIsLoggedIn(true);
    setuserId(uid)
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setuserId(null)
  }, []); 

  let routes;
  if(isLoggedIn)
  {
    routes = (<Switch>
    <Route path = '/' exact><Redirect to="/Home"/></Route>
    <Route path='/Home' exact>
     <Headers />
    </Route>
    <Redirect to='/'></Redirect>
  </Switch>)
  }

  else{
    routes = (<Switch>
    <Route path = '/' exact><Redirect to="/Home"/></Route>
    <Route path='/Home' exact>
      <Headers />
      <Search />
    </Route>
  
  <Route path='/login'><Login /></Route>
  <Route path= '/register'><Register /></Route>
  <Redirect to='/'></Redirect>
  </Switch>)
  }
  return (
    <AuthContext.Provider
    value={{ isLoggedIn: isLoggedIn,userId:userId ,login: login, logout: logout }}>
      <main>{routes}</main>
    </AuthContext.Provider>
  );
}

export default App;
