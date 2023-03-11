import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
    selectProduct
} from '../features/productSlice';

const ProductDetails = () => {
    let { id } = useParams();
    const products = useSelector(selectProduct);
    const product = products[id - 1];

    console.log(products);
    console.log(product);
    console.log(id);

    return (
        <>
            {product ?
                <div className='product_details'>
                    <div className="details_image">
                        <img className='item_image' src={`${product.image}`} alt={`Image for ${product.id}`} />
                    </div>
                    <div className="details_information">
                        <h1>{product.name}</h1>
                        <h1>{product.price}</h1>
                        <h1>{product.stock}</h1>
                        <h1>{product.details}</h1>
                    </div>
                </div>
                :
                <h1>
                    No Data Found
                </h1>
            }
        </>
    )
}

export default ProductDetails