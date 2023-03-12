import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import toast, { Toaster } from 'react-hot-toast';

import {
    subOrAddCart,
    selectCart
} from '../features/cartSlice';

import {
    addQuantity,
    subtractQuantity,
    selectProduct
} from '../features/productSlice';

const ProductDetails = () => {

    const products = useSelector(selectProduct);
    const cart = useSelector(selectCart)
    const dispatch = useDispatch();
    let { id } = useParams();

    const exists = cart.filter((e) => e.id == id);
    const currItem = exists.length > 0 ? exists[0].stock : 0;
    // const product = products[id - 1];
    const product_exists = products.filter((e) => e.id == id);
    const product = product_exists.length > 0 ? product_exists[0] : false;
    
    const details = product ? product.details.replaceAll("_", " \n + ") : "No description Found";

    const AddQuantity = () => {
        if (product.stock - 1 >= 0) {
            dispatch(subtractQuantity(product));
        } else {
            // console.log("Out of stock !");
            notify("Product out of stock !", false);
            return;
        }
        dispatch(subOrAddCart());
        notify("Product Added to Cart !", true);
    }

    const SubtractQuantity = () => {
        if (product.stock + 1 < 11) {
            dispatch(addQuantity(product));
        } else {
            notify("No Product in the Cart !", false);
            return;
        }
        dispatch(subOrAddCart());
        notify("Product Removed from Cart !", false);
    }

    const notify = (text, good) => { good ? toast.success(text) : toast.error(text) };

    return (
        <>
            {product ?
                <div className='product_details'>
                    <div className="details_image">
                        <img className='item_image' src={`${product.image}`} alt={`Product id : ${product.id}`} />
                    </div>
                    <div className="details_information">

                        <div className='details_headers'>
                            <div><h1>{product.name}</h1></div>
                            <div><h1> &#x20B9; {product.price}</h1></div>
                        </div>

                        <div style={{ marginLeft: "3rem" }}>{product.stock ? <>In Stocks : {product.stock}</> : "Out of stock !"} </div>

                        <div className='details'><ReactMarkdown>{details}</ReactMarkdown></div>
                        <div className='details_operations'>
                            <div className='details_qty'>
                                <div className='quantity_btn' onClick={() => AddQuantity()}><AiFillPlusCircle className='icon_control' /></div>

                                <div className='item_quantity'>
                                    {currItem}
                                </div>

                                <div className='quantity_btn' onClick={() => SubtractQuantity()}><AiFillMinusCircle className='icon_control' /></div>
                            </div>
                            <div className='add_to_cart'>
                                {product.stock ?
                                    <button className='add_to_cart_btn' onClick={() => AddQuantity()}>Add to Cart</button>
                                    :
                                    <button className='add_to_cart_btn' disabled>Not Available</button>
                                }
                            </div>
                        </div>
                    </div>
                    <Toaster position="top-right" />
                    <div className='edit_product'>
                        <Link to={`/add_product/${product.id}`}><HiOutlinePencilSquare className='icon_control' /></Link>
                    </div>
                </div>
                :
                <div>
                    No Data Found
                </div>
            }
        </>
    )
}

export default ProductDetails