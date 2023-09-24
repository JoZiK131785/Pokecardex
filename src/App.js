import './reset.css';
import './index.css';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Series from './components/Series';
import Serie from './components/Serie';
import Set from './components/Set';

function App() {

  return (
    <Routes>

      <Route path="/" element={<Home />}></Route>

      <Route path="/series" element={<Series />}></Route>
      <Route path="/serie/:id" element={<Serie />}></Route>
      
      <Route path="/set/:id" element={<Set />}></Route>
      
    </Routes>
  );
}

export default App;
