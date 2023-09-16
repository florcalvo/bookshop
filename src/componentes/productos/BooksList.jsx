import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookList.css';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://example-data.draftbit.com/books?_limit=10');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='libros'>
      <h1>Lista de Libros</h1>
      <div className='productos'>
      <ul>
        {books.map((book) => (
        <li key={book.id}>
            {book.title} - {book.authors} 
            <img src={book.image_url} alt={book.title} />
            <div><button>Comprar</button></div>
        </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default BookList;