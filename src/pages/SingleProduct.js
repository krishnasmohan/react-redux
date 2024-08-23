import React, { Fragment, useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { Button, Container, Image, Row, Col } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { addToCarts } from '../components/store/Cart/CartSlice';
import "./singleProduct.css"

export default function SingleProduct() {
    let {productId} = useParams();
    let [product, setProduct] = useState(null);
    let [quantity, setQuantity] = useState(1);
    const { products } = useSelector((state) => state.products);

    const dispatch = useDispatch();

    const decreaseQuantity = (e) => {
        e.preventDefault();
        quantity > 1 ? setQuantity((quantity -= 1)) : setQuantity(quantity);
    };

    const increaseQuantity = (e) => {
        e.preventDefault();
        setQuantity(quantity += 1);
        
    }

    const addToCart = (e) => {
        e.preventDefault();
        let item = {
            id: parseInt(productId),
            quantity:quantity,
            price: product.price
        };
        dispatch(addToCarts(item));
    }

    useEffect(()=> {
        let result = products.find((p) => p.id === parseFloat(productId));
        setProduct(result);
    }, [productId,products]);
  return (
    <Fragment>
        <Header />
        <Container>
            {product && (
                <Row className='my-5'>
                    <Col md={6} sm={12}>
                        <div className='img-container'>
                            <Image className='single-img' src={product.image} />
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <div className='px-4'>
                            <h2>{product.title}</h2>
                            <h4 className='py-2 fs-5'>
                                Category: {" "}
                                <Link 
                                    to={`/category/${product.category}`}
                                    className='text-capitalize text-decoration-none'
                                >
                                    {product.category}
                                </Link>
                            </h4>
                            <p>{product.description}</p>
                            <div className='d-flex mb-3'>
                                <button 
                                    className='btn btn-sm btn-dark fs-6 me-3 text-center'
                                    onClick={increaseQuantity}
                                >
                                    <FaPlus />
                                </button>
                                <input 
                                    type='number'
                                    className='form-control text-center w-auto p-0 m-0'
                                    value={quantity}
                                    readOnly={true}
                                    required={true}
                                />
                                <button className='btn btn-sm btn-dark fs-6 ms-3 text-center'
                                    onClick={decreaseQuantity}
                                >
                                    <FaMinus />
                                </button>
                            </div>
                            <div>
                                <Button variant='dark' className='me-2'>
                                    Buy Now
                                </Button>
                                <Button variant='secondary' className='ms-2' onClick={addToCart}>
                                    Add To Cart
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            )}
        </Container>
    </Fragment>
  )
}
