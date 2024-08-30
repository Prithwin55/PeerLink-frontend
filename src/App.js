import { Route, Routes } from 'react-router-dom';
import './App.css';
import Authentication from './pages/authentication/authentication/Authentication';
import Register from './pages/authentication/register/Register';
import Login from './pages/authentication/login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Authentication />}>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
