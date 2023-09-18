import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import SearchBar from '../searchBar/searchBar';

function NavBar() {
  const [buscarResultados, setBuscarResultados] =useState ([]);
    const cambioBusqueda = async (query) => {
        try {
            const respuesta = await fetch ('https://example-data.draftbit.com/books?_limit=18');
            const datos = await respuesta.json();
            setBuscarResultados(datos);
        } catch (error) {
        console.error('Error al buscar', error);
    }
    };
  return (
    <nav>
      <h1 className='Navbar'>Write to Us</h1>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/tienda"}>Store</NavLink>
      <NavLink to={"/Cart"}>Cart</NavLink>
      <div>
         <h3>Resultados de la búsqueda:</h3>
            <ol>
               {buscarResultados.map((book) => (
               <li key={book.id}>{book.title}</li>))}
            </ol>           
       </div>
    </nav>
  );
}

export default NavBar;