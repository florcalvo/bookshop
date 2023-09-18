import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookList.css';

const BookList = () => {
  const [ books, setBooks ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(null);
  const booksPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://example-data.draftbit.com/books?_limit=18');
        setBooks(response.data);
        const totalPages = Math.ceil(response.data.length / booksPerPage);
        setTotalPages(totalPages);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchData();
  }, []);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (endIndex < books.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const booksToDisplay = books.slice(startIndex, endIndex);

  return (
    <>
      <div className='libros'>
        <h1> La lectura es un viaje. ¡Ven a explorarlo con nosotros! </h1>
        <h2>Lista de Libros</h2>
        <div className='productos'>
          <ul>
            {booksToDisplay.map((book) => (
              <li key={book.id}>
                <div className='imagenes-producto'>
                  <img src={book.image_url} alt={book.title} />
                </div>
                <div className='titulo'>
                  {book.title} - {book.authors}
                </div>
                <div>
                  <button>Comprar</button>
                </div>
              </li>
            ))}
          </ul>
          </div>
     <div className='paginacion'>
     <div className='botones-paginacion'>
      <button onClick={handlePreviousPage}>Página anterior</button>
      <button onClick={handleNextPage}>Página siguiente</button>
        </div>
    </div>
</div>
    </>
  );
};

export default BookList;
