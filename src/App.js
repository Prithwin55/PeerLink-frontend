import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './pages/authentication/authentication/Authentication';
import Register from './pages/authentication/register/Register';
import Login from './pages/authentication/login/Login';
import Home from './pages/home/Home';
import Post from './components/post/Post';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Authentication />}>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />}/>
        </Route>
        <Route path='/home' element={<Home />} >
            <Route path='post' element={<Post />}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
