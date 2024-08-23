import React, { Fragment } from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactStars from "react-star-ratings";
import "./product.css"

export const ProductCard = ({product}) => {
  return (
    <Fragment>
        <Link to={`/product/${product.id}`} 
        className='text-dark text-decoration-none'>
            <Card className='custom-card'>
                <CardImg className='py-3 card-img' variant='top' src={product.image} />
                <CardBody className='text-center'>
                    <CardTitle className='fs-6'>
                        {product.title.slice(0,30)}...
                    </CardTitle>
                    <CardText className="text-capitalize text-decoration-none fs-6">
                        {product.category}
                    </CardText>
                    <h5>${product.price}</h5>
                    <div className='py-2 d-flex justify-content-center fs-6'>
                        <ReactStars
                            rating={product.rating.rate}
                            starRatedColor='gold'
                            starDimension='20px'
                            starSpacing='2px'
                        ></ReactStars>
                        {`(${product.rating.count})`}
                    </div>
                </CardBody>
            </Card>
        </Link>
    </Fragment>
  )
}
