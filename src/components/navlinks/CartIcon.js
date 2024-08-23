import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiShoppingCart} from "react-icons/hi"
import { useSelector } from 'react-redux'
import { totalCartItem } from '../store/Cart/CartSelector';
import './cartIcon.css';

export default function CartIcon() {
    let state = useSelector((state) => state);
    let totalItem = totalCartItem(state);
  return (
    <NavLink to={`/cart`}>
        <div className='cart-icon'>
            <div className='d-flex flex-column'>
                <span>
                    <HiShoppingCart />
                </span>
                <span className='cart-number'>{totalItem}</span>
            </div>
        </div>
    </NavLink>
  )
}
