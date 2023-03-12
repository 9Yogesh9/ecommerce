import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

import {
  subOrAddCart
} from '../features/cartSlice';

import {
  addProducts,
  selectProduct
} from '../features/productSlice';

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();
  const products = useSelector(selectProduct);
  const product_exists = products.filter((e) => Number(e.id) === Number(id));
  const product = product_exists.length > 0 ? product_exists[0] : false;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    formJson.stock = 10;
    formJson.price = Number(formJson.price);
    formJson.id = id ? id : Date.now();

    dispatch(addProducts(formJson));
    dispatch(subOrAddCart());
    id ? notify("Product Edited Successfully !", true) : notify("Product Added Successfully !", true);
    
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }

  const notify = (text, good) => { good ? toast.success(text) : toast.error(text) };

  return (
    <div className='add_product'>
      <div className="add_product_image">
        <h1>UPDATE</h1>
        <h1>PRODUCTS</h1>
      </div>
      <div className="add_product_inf">
        <div className="add_product_form_container">
          <form onSubmit={handleSubmit} className="add_product_form">
            <label>
              Name: <input name="name" defaultValue={product ? product.name : ""} />
            </label>
            <label>
              Image: <input name="image" defaultValue={product ? product.image : ""} />
            </label>
            <label>
              Price: <input type="number" name="price" defaultValue={product ? product.price : ""} />
            </label>
            <label>
              Details: <textarea name="details" defaultValue={product ? product.details : ""} />
            </label>
            <p id="add_product_info">Please use '_' before each point to separate details.</p>
            <button type="submit">Submit form</button>
          </form>
        </div>
      </div>

      <Toaster position="top-right" />
    </div>
  )
}

export default AddProduct