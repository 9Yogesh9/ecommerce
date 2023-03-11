import React from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import '../index.css';

import {
    setQuantity,
    subOrAddCart
} from '../features/cartSlice';

import {
    // addProducts,
    // removeProducts,
    addQuantity,
    subtractQuantity,
    // selectProduct
} from '../features/productSlice';

const SingleItem = ({ item, cart }) => {
    // const products = useSelector(selectProduct);
    const dispatch = useDispatch();

    const AddQuantity = () => {
        // console.log("ADD ");
        // console.log(item);
        // console.log("Before " + item.stock);

        if (item.stock - 1 >= 0) {
            dispatch(subtractQuantity(item));
        } else {
            console.log("Out of stock !")
        }

        dispatch(setQuantity());
        dispatch(subOrAddCart());

        // console.log("After " + item.stock);
    }

    const SubtractQuantity = () => {
        if (item.stock + 1 < 11) {
            dispatch(addQuantity(item));
        } else {
            console.log("Max Quantity Exceded !")
        }
        dispatch(setQuantity());
        dispatch(subOrAddCart());
    }


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

        </div>
    )
}

export default SingleItem;