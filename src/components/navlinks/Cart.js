import React, { Fragment } from 'react'
import { Header } from '../Header'
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import { cartState } from "../store/Cart/CartSlice";
import {
  subTotalPrice,
  totalPrice,
  totalTax
} from "../store/Cart/CartSelector";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../cart/cartItem';
import { Footer } from '../Footer';

export default function Cart() {
  let state = useSelector((state) => state);
  let { carts } = useSelector(cartState);
  let subTotal = subTotalPrice(state);
  let tax = totalTax(state);
  let totalAmount = totalPrice(state);

  return (
    <Fragment>
        <Header />
        <Container>
            <Row>
              {!carts.length && (
                <div className='w-100 my-5 text-center text-danger'>
                  <h3>
                    You don't have any product in cart.
                    <Link to={"/products"} className='text-dark text-decoration-underline'>
                      Go for shopping
                    </Link>
                  </h3>
                </div>
              )}
              {
                carts.length > 0 && carts.map((c)=> {
                  return(
                    <Col sm="12" lg="12" key={c.id}>
                      <CartItem item={c}/>
                    </Col>
                  )
                })
              }
            </Row>

            {carts.length > 0 && (
              <div className='my-3'>
                <Card>
                  <CardBody>
                    <div className='d-flex justify-content-around'>
                      <div className='w-100 align-middle'>
                        <h5 className='align-middle d-inline'>
                          Subtotal: ${subTotal}
                        </h5>
                      </div>
                      <div className='w-100'>
                        <h5 className='align-middled d-inline'>Tax(2%): ${tax}</h5>
                      </div>
                      <div className='w-100 align-middle'>
                        <h5 className='align-middle d-inline'>
                          Total Price: ${totalAmount.toFixed(2)}
                        </h5>
                      </div>
                      <div className='w-100 text-center'>
                        <Button variant="dark" className='align-middle d-inline'>
                          Checkout
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            )}
        </Container>
        <div className='mb-5 pb-5'></div>
        <div className='mb-5 pb-5'></div>
        <div className='mb-5 pb-5'></div>
        <div className='mb-5 pb-5'></div>
        <Footer />
    </Fragment>
  )
}
