import Headers from "./components/header/header";
import {Route,Redirect} from 'react-router-dom'

function App() {
  return (
    <div>
       <Route path = '/' exact><Redirect to="/Home"/></Route>
       <Route path='/Home' exact>
        <Headers />
       </Route>
     
     <Route path='/login'>
      
     </Route>

     <Route path= 'register'>

     </Route>
    </div>
  );
}

export default App;
