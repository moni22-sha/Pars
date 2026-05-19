import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Layout} from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Facility from './pages/Facility';
import Clients from './pages/Clients';
import Contact from './pages/Contact';

import { ProgressiveDies } from './components/ProgressiveDies';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Products />} />
          <Route path="facility" element={<Facility />} />
          <Route path="clients" element={<Clients />} />
          <Route path="contact" element={<Contact />} />
          <Route path="progressive-dies" element={<ProgressiveDies />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
