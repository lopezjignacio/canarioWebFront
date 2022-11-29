import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import BasquetPage from './pages/BasquetPage';
import FutbolPage from './pages/FutbolPage';
import HomePage from './pages/HomePage';
import Resultados from './pages/Resultados';
import ContactoPage from './pages/ContactoPage';


function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>

        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/BasquetPage" element={<BasquetPage />}/>
          <Route path="/FutbolPage" element={<FutbolPage />}/>
          <Route path="/Resultados" element={<Resultados />}/>
          <Route path="/ContactoPage" element={<ContactoPage />}/>
        </Routes>

      </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
