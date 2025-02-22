
import './App.css';
import {BrowserRouter ,Route, Routes} from 'react-router-dom';  
import Navbar from './component/Navbar.jsx';
import Login from './component/login.jsx';
import Sign from './component/signin.jsx'
import About from './component/About.jsx';
import Error from './component/error.jsx';
import Forgot from './component/forgot.jsx';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/Sign' element={<Sign />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/' element={<Navbar />}></Route>
        <Route path='/*' element={<Error />}></Route>
        <Route path='/Forgot' element={<Forgot/>}></Route>
        


      </Routes>
      </BrowserRouter>
      </>

  );
}

export default App;
