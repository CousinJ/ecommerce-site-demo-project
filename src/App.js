import React, { useState, useEffect}from 'react'
import Home from './components/home/Home';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';



function App() {

  const [view, setView] = useState('')

  return (
    <div className="App">
      <Topbar></Topbar>
      <Navbar></Navbar>
      {view === 'home' && <Home></Home>}
    </div>
  );
}

export default App;
