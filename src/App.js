import './App.css';
import React from "react";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Signup from './components/SignUp';
import Detail from './components/Detail';
import Control from './components/Control';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/detail" element={<Detail/>} /> 
        <Route path="/control" element={<Control/>} /> 
      </Routes>
    </Router>
  );
}