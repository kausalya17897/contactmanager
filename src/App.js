
import './App.css';
import Contact from './pages/Contact';
import {Link,Switch,useHistory,useParams} from 'react-router-dom'
  import { Route } from 'react-router-dom';
import Login from './pages/Login';
import  Register from './pages/Register'
import ContactsIcon from '@mui/icons-material/Contacts';
import { EditContact } from './pages/Contact';
function App() {
  const history=useHistory();
  const {id}=useParams();
  return (
    <div className="App">
      <nav className='dflex jcs top '>
        <div className='flexa fsb'><ContactsIcon/> Contact Manager</div>
        
        <div className='flexb'>
        <Link  className="link" to="/Contact">About</Link>
        <Link  className="link" to="/register">Register</Link>
        <Link  className="link" to="/login">Login</Link>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
        
        </Route>
        <Route path="/Contact/edit/:id">
        <EditContact/>xbb
        </Route> 
        <Route path="/Contact">
        <Contact/>
        </Route> 
        <Route path="/login">
          <Login/>
        </Route> 
        <Route path="/register">
      <Register/>
        </Route>
      </Switch>
    
    </div>
  );
}

export default App;
