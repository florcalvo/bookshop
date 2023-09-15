import React, { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { initialProduct } from "../service/initialProducts";
import { getAllBooks } from "../service/productsService";
import axios from 'axios';

export const productsContext = createContext([initialProduct]);

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, updateCart] = useState([]);
  const addCart = prod => {
    updateCart(prev => [...prev, prod]);
  };

  const fetchData = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getAllBooks();
      setProducts(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <productsContext.Provider value={{ products, isLoading, error, cart, addCart, }}>
      {children}
    </productsContext.Provider>
  );
};
ProductContextProvider.propTypes = {
  children: PropTypes.node
};