import './reset.css';
import './index.css';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Sets from './components/Sets';
import Series from './components/Series';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/sets" element={<Sets />}></Route>
      <Route path="/series" element={<Series />}></Route>
    </Routes>
  );
}

export default App;
