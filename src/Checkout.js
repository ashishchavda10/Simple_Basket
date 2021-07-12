import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();

    const cleanTheBasket = () => {
        dispatch({
            type: 'CLEAN_BASKET',
        })
    }
    return (
        <div className='checkout'>
            <h1>This is checkout page</h1>
            {basket.map(item => (
                <CheckoutProduct 
                    title={item.title}/>
            ))}
            <button onClick={cleanTheBasket}>Empty The Basket</button>
        </div>
    )
}

export default Checkout
