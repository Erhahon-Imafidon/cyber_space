import Home from './pages/Home';
import Document from './pages/Document';
import Pricing from './pages/Pricing';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='/documention' element={<Document />} />
          <Route path='/pricing' element={<Pricing />} />
        </Route>
      </Routes>
      </>
  );
}

export default App;
