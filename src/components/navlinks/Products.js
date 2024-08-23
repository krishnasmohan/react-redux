import React, { Fragment } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { ProductCard } from '../product/ProductCard'

export const Products = () => {
  const { products } = useSelector((state) => state.products);
  return (
    <Fragment>
        <Header />
        <Container>
          <h4 className='mb-4'>Showing Products</h4>
          <Row>
            {products && products.map((p,index)=> {
              return(
                <Col xs={12} sm={6} md={4} lg={2} className="mb-4" key={index}>
                  <ProductCard product={p}/>
                </Col>
              )
            })}
          </Row>
        </Container>
        <div className="mb-5"></div>
        <Footer />
    </Fragment>
  )
}
