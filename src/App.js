import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Document from './pages/Document';
import Pricing from './pages/Pricing';


function App() {
  return (
    <div className="min-h-screen w-full relative">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/documentation' element={<Document />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
