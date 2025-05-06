import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './component/Layout'; 
import Home from './Home/Home';
import Exchangerate from './Exchangerate/Exchangerate';
import About from "./About/About";
import Errorpage from './Errorpage/Errorpage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Exchangerate" element={<Exchangerate />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<Errorpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
