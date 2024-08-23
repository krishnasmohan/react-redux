import { useDispatch } from "react-redux";
import axios from "axios";
import {FaMinus, FaPlus} from "react-icons/fa"
import {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
} from "../store/Cart/CartSlice"
import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody } from "react-bootstrap";
import { Link } from "react-router-dom";

function CartItem({item}) {
    const [product, setProduct] = useState({});
    const dispatch = useDispatch();

    const decreaseItemQuantity = (e) => {
        e.preventDefault();
        dispatch(decreaseQuantity(item));
    }

    const increaseItemQuantity = (e) => {
        e.preventDefault();
        dispatch(increaseQuantity(item));
    }

    const removeItem = (e) => {
        e.preventDefault();
        dispatch(removeFromCart(item))
    }

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${item.id}`).then((res) => {
            setProduct({ ...res.data, quantity: item.quantity})
        })
    }, [item]);
    let content = ""
    if(product){
        return (content = (
            <Card className="my-2">
                <CardBody>
                    <div className="d-flex justify-content-between">
                        <div className="w-100">
                            <Link
                                to={`/product/${product.id}`}
                                className="text-dark text-decoration-none fs-5"
                            >
                                {product.title ? product.title.slice(0,20):""}...
                            </Link>
                        </div>
                        <div className="d-flex w-100 justify-content-center">
                            <button
                                className="btn btn-sm btn-dark fs-6 ms-3 text-center"
                                onClick={decreaseItemQuantity}
                            >
                                <FaMinus />
                            </button>
                            <span className="fs-4 text-center" style={{width:"30px"}}>{product.quantity}</span>
                            <button
                                className="btn btn-sm btn-dark fs-6 text-center"
                                onClick={increaseItemQuantity}
                            >
                                <FaPlus />
                            </button>
                        </div>
                        <div className="w-100 text-center">
                            <span className="fs-5">
                                $
                                {product.price ? 
                                (product.price * product.quantity).toFixed(2)
                                :""
                            }
                            </span>
                        </div>
                        <div className="w-100 text-center">
                            <Button variant="danger" onClick={removeItem}>
                                Remove
                            </Button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        )
          )
    }
    return {content}
  
}

export default CartItem