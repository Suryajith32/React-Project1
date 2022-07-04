
import './App.css'
import Home from './components/pages/Home/home'
import Signup from './components/pages/Signup/signup'
import Login from './components/pages/Login/login'
import Admin from './components/Admin/admin'
import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
      
      <Router>
      <Routes>

     <Route exact path='/' element={<Home/>}></Route>

     <Route path='/signup' element={<Signup/>}></Route>

     <Route path='/login' element={<Login/>}></Route>

     <Route path='/admin' element={<Admin/>}></Route>

     </Routes>
      
      </Router>
      </div>
    
  );
}

export default App;
