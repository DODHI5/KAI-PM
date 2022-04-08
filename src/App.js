import React from 'react';
import './Styles/App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Archive from './Pages/Archive';
import Calendar from './Pages/Calendar';
import Projects from './Pages/Projects';
import Tasks from './Pages/Tasks';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
          <Route path='/' exact component={Dashboard} />
          <Route path='/archive'  component={Archive} />
          <Route path='/calendar'  component={Calendar} />
          <Route path='/projects'  component={Projects} />
          <Route path='/tasks'  component={Tasks} />
      </Routes>
    </Router>
    </>
      
  );
}

export default App;
