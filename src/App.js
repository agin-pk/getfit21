import './App.css';
import Muscles from './Components/Muscles';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='muscles' element={<Muscles />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
