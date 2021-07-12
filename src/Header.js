import React from 'react';
import './Header.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}] = useStateValue();
    return (
        <div className='header'>
            <div className='header__basket'>
                <Link to='/'>
                <ShoppingBasketIcon className='header__basketIcon'/>
                </Link>
                <h3>Shopping Basket</h3>
            </div>
            <Link to="/checkout">
            <div className='header__basketCount'>
                <AddShoppingCartIcon  className='header__basketCartIcon'/>
                <span className='header__count'>{basket.length}</span>
            </div>
            </Link>
        </div>
    )
}

export default Header
