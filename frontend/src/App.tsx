import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calendar from './components/Calendar';
import Layout from './Layout/Layout';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Profile from './components/Profile';
import ResourceAllocation from './components/ResourceAllocation';
import Addevent from './components/Addevent';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path="/dashboard" element={<Layout/>} >
            <Route path="/dashboard" element={<Calendar/>}/>
            <Route path="/dashboard/resourceallocation" element={<ResourceAllocation/>}/>
            <Route path="/dashboard/addevent" element={<Addevent/>}/>
            <Route path="/dashboard/profile" element={<Profile/>}/>
            </Route>   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
