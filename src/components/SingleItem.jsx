import React from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import '../index.css';

import {
    subOrAddCart
} from '../features/cartSlice';

import {
    addQuantity,
    subtractQuantity,
} from '../features/productSlice';

const SingleItem = ({ item, cart }) => {
    const dispatch = useDispatch();

    const AddQuantity = () => {

        if (item.stock - 1 >= 0) {
            dispatch(subtractQuantity(item));
        } else {
            notify("Product out of stock !", false);
            return;
        }
        dispatch(subOrAddCart());
        notify("Product Added to Cart !", true);
    }

    const SubtractQuantity = () => {
        if (item.stock + 1 < 11) {
            dispatch(addQuantity(item));
        } else {
            notify("No Product in the Cart !", false);
            return;
        }
        dispatch(subOrAddCart());
        notify("Product Removed from Cart !", false);
    }

    const notify = (text, good) => { good ? toast.success(text) : toast.error(text) };

    return (
        <div className='cart_item'>
            <div className='item_image_container'>
                <img src={item.image} className="item_image" alt={`product{$item.id}`} />
            </div>
            <div className='name_stock'>
                <div className='item_name'>
                    <Link to={`/product_details/${item.id}`}>
                        {item.name}
                    </Link>
                </div>
                <div className='item_data'>

                    <div className='item_stock'>
                        {cart ?
                            ""
                            :
                            <>
                                In Stock : {item.stock ? item.stock : "Out of stock !"}
                            </>
                        }
                    </div>

                    <div className='item_price'>
                        {cart ?
                            <>
                                Total Cost: &#x20B9; {item.price * item.stock}
                            </>
                            :
                            <>
                                &#x20B9; {item.price}
                            </>
                        }


                    </div>
                </div>
            </div>

            {cart ?
                <>
                    <div className='quantity_btn' onClick={() => AddQuantity()}><AiFillPlusCircle className='icon_control' /></div>

                    <div className='item_quantity'>
                        {item.stock}
                    </div>

                    <div className='quantity_btn' onClick={() => SubtractQuantity()}><AiFillMinusCircle className='icon_control' /></div>
                </>
                :
                <div className='add_to_cart'>
                    {item.stock ?
                        <button className='add_to_cart_btn' onClick={() => AddQuantity()}>Add to Cart</button>
                        :
                        <button className='add_to_cart_btn' disabled>Not Available</button>
                    }
                </div>
            }
            <Toaster position="top-right" />
        </div>
    )
}

export default SingleItem;