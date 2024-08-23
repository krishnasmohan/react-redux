import React, { Fragment, useEffect, useState } from 'react'
import { Header } from '../Header'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { ProductCard } from '../product/ProductCard';

export default function CategoryProduct() {
    let {categoryName} = useParams();
    const [categoryProducts, setCategoryProducts] = useState([]);
    const { products } = useSelector((state) => state.products);

    useEffect(()=>{
        let data = products.filter((p) => p.category === categoryName);
        setCategoryProducts(data);
    },[categoryName,products])
  return (
    <Fragment>
        <Header />
        <Container>
            <div className='my-4'>
                <h4 className='mb-4'>
                    Products from -{" "}
                    <span className='text-capitalize'>{categoryName}</span>
                </h4>
                <Row>
                    {
                        categoryProducts && categoryProducts.map((product,index) => {
                            return(
                                <Col 
                                xs={12}
                                sm={6}
                                md={2}
                                lg={2}
                                className='mb-4'
                                key={index}
                                >
                                    <ProductCard product={product}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </Container>
    </Fragment>
  )
}
