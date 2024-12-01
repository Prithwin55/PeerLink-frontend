import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Authentication from './pages/authentication/authentication/Authentication';
import Register from './pages/authentication/register/Register';
import Login from './pages/authentication/login/Login';
import Home from './pages/home/Home';
import Post from './components/post/Post';
import Profile from './components/profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getProfileAction } from './redux/auth/auth.action';


function App() {

  const { payload } = useSelector((state) => state.auth)
  const navigate = useNavigate();
  
  const jwt = localStorage.getItem("jwt");

  const dispatch = useDispatch()
  
  // useEffect(() => {
  //   console.log(jwt);
    
  //   dispatch(getProfileAction(jwt))


  // },[jwt])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={!jwt ? <Authentication /> : <Home />}>
          
        </Route>
        {/* <Route path='auth' element={<Authentication/>}></Route>  */}
        
        <Route path='/home' element={jwt ? <Home /> : <Authentication /> } >
          <Route path='posts' element={jwt?<Post />:<Authentication/>} />
          <Route path='profile' element={jwt?<Profile />:<Authentication/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
