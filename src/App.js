import Headers from "./components/header/header";
import {Route,Redirect, Switch} from 'react-router-dom'
import Register from "./components/Register/Register";

function App() {
  return (
    <div>
      <Switch>
       <Route path = '/' exact><Redirect to="/Home"/></Route>
       <Route path='/Home' exact>
        <Headers />
       </Route>
     
     <Route path='/login'>
      
     </Route>
     <Route path= '/register'>
      <Register />
     </Route>
     </Switch>
    </div>
  );
}

export default App;
