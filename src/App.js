import './App.css';
import React from "react";
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Signup from './component/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
  );
}