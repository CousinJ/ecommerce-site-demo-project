import React, { useState, useEffect}from 'react'
import Home from './components/home/Home';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';

import Dropdowns from './components/dropdown/Dropdowns';




function App() {



  const [view, setView] = useState('home')
const [drop, setDrop] = useState('')
const [closeDrop, setCloseDrop] = useState(false)





  return (
    <div className="App">

      <Topbar data={{}}></Topbar>
      <Navbar data={{content: ['d', 'u', 'm', 'm', 'y'], actions: [setDrop, setCloseDrop] }}></Navbar>
     <Dropdowns data={{content:  ['d', 'u', 'm', 'm', 'y'], drop: drop, closeDrop: closeDrop}}></Dropdowns>
      {view === 'home' && <Home></Home>}
    </div>
  );
}

export default App;
