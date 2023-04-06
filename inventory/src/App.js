import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Header from './Components/Header';
import AddItem from './Components/AddItem';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Context = React.createContext();

const App = () => {

  const [users, setUsers] = useState([]);
  const [loggedin, setLoggedin] = useState(false);
  const [specificUser, setSpecificuser] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    fetch('http://localhost:4000/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <>
      <Context.Provider value={{ users, loggedin, setLoggedin, specificUser, setSpecificuser }} >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />;
          <Route path='/login' element={<Login />} />;
          <Route path='/profile' element={<Profile />} />
          <Route path='/addItem' element={<AddItem />} />
        </Routes>
      </Context.Provider>
    </>
  );
}

export default App;
