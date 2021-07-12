import React from 'react'
import { useStateValue } from './StateProvider'

function Product({title}) {

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {title: title}
        })
    }
 console.log(basket);
    return (
        <div className='product'>
            <p>{title}</p>
            <button onClick={addToBasket}>Add To Cart</button>
        </div>
    )
}

export default Product
