import './index.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Tienda from './pages/Tienda.jsx';
import BooksList from './componentes/productos/Bookslist';


function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route> 
          <Route path="/tienda" element={<Tienda/>}></Route>
          <Route path="/productos" element={<BooksList/>}></Route>
          <Route path="*" element={<h3>Ruta inexistente</h3>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}


export default App ;