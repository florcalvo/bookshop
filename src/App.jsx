import './index.css';
import { ProductContextProvider } from './context/productsContext';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Tienda from './pages/Tienda.jsx';
import Productos from './componentes/productos/Productos.jsx';


function App() {
  return (
    <BrowserRouter>
      <ProductContextProvider>
        <Routes>
          <Route path="/" element={<Home/>}></Route> 
          <Route path="/tienda" element={<Tienda/>}></Route>
          <Route path="/productos" element={<Productos/>}></Route>
          <Route path="*" element={<h3>Ruta inexistente</h3>}></Route>
        </Routes>
      </ProductContextProvider>
    </BrowserRouter>
  );
}


export default App ;