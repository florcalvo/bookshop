import React, { useState } from "react";
import "./SearchBar.css"

const SearchBar= ({ onSearch }) => {
    const [query, setQuery] = useState ('');
    const manejoCambioInput = (event) => {
        setQuery(event.target.value);
    };
    const cambioBusqueda = () => {
        onSearch(query);
    }

    return (
        <div className="buscador">
            <input 
            type="text"
            placeholder="Buscar libros"
            value={query}
            onChange={manejoCambioInput} className="barraBusqueda"></input>
            <button onClick={cambioBusqueda}>Buscar</button>
        </div>
    );
};

export default SearchBar;
