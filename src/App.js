import './reset.css';
import './index.css';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Pokecardex from './components/Pages/Pokecardex';
/* import Series from './components/Series';
import Serie from './components/Serie';
import Set from './components/Set'; */

function App() {

  return (
    <Routes>

      <Route path="/" element={<Pokecardex />}></Route>

      {/* <Route path="/series" element={<Series />}></Route>
      <Route path="/serie/:id" element={<Serie />}></Route>
      
      <Route path="/set/:id" element={<Set />}></Route> */}
      
    </Routes>
  );
}

export default App;
