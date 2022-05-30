import React from "react";
import AddProduct from './AddProduct';
import Product from './Product';
import Pagination from './Pagination';
import "./styles.css";

const Products = () => {
 
  return (
     <div className="prod">
       <AddProduct />
       <Product />
       <Pagination />
     </div>
  );
};

export default Products;
