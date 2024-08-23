import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ProductCard } from './ProductCard';
import { useSelector } from 'react-redux';

export default function ProductContainer() {
    
    const {products} = useSelector((state) => state.products)
    
  return (
    <Container className='my-3 py-3'>
        <h3>Latest Product</h3>
        <Row>
            {products && products.slice(0,6).map((product,index)=>{
                return(
                    <Col key={index} xs={12} sm={6} md={4} lg={2} className='mb-5'>
                        <ProductCard product={product}/>
                    </Col> 
                )
            })}
        </Row>
        <div className='mb-10 pb-10' style={{height:"100px", width:"100%"}}></div>
    </Container>
  )
}
