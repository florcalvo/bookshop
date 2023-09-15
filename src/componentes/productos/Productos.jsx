import React, {useState, useEffect} from 'react';
//import '../App';
import {API_URL} from '../api';
import axios from 'axios';

const Productos = () => {
    const [books, setBooks] = useState ([]);

    useEffect(() =>{
        axios
        .get(API_URL)
        .then(res=> {
            console.log(res.data)
            setBooks(res.data)
        }).catch((err) => console.log(err));
    }, [])
    return (
        <div className='book-list'>
            {books.map((book)=>{
                <div key={book.id} className='Book'>
                    <div><h2>{book.title}</h2></div>
                    <div><img src={book.image.url} alt="#"/></div>
                </div>
            })}
        </div>
    )
}


//import { Link } from "react-router-dom";

//function Productos({ title = "titulo por defecto", 
//descripcion ="descripcion por defecto"}) {
  //  return (
    //      <Link to = {title}>
      //          <h2>{title}</h2>
        //    </Link>
        //    <p>{descripcion}</p>
      //  </div>
   // );
//}

export default Productos;
