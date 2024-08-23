import React, { Fragment } from 'react'
import {Carousel,Button} from "react-bootstrap"
import { Link } from 'react-router-dom'

export const ImageSlider = () => {
  return (
    <Fragment>
        <Carousel variant="dark">
        <Carousel.Item>
                <img class="d-block w-100" style={{height:"100vh",objectFit:"cover"}} 
                src='https://static.zara.net/assets/public/feb0/aab8/716b4df88ca2/844f776d969f/image-landscape-fill-02b21a9e-bb23-4e30-9c12-ebb74bd2b9f5-default_0/image-landscape-fill-02b21a9e-bb23-4e30-9c12-ebb74bd2b9f5-default_0.jpg?ts=1722871532821&w=1920'/>
                <Carousel.Caption className="bg-white text-dark">
                    <h5>CONTRAST RIBBED CARDIGAN </h5>
                    <p>Cardigan with a round neck and short sleeves.</p>
                    <div className="mb-3">
                        <Link to={`/products`}>
                            <Button variant="dark">Shop Now</Button>
                        </Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img class="d-block w-100" style={{height:"100vh",objectFit:"cover"}} 
                src='https://static.zara.net/assets/public/2e30/7db4/3bf54186bc3a/7048c5e00303/image-landscape-fill-422f43da-0956-4d91-8d06-8d0f1f399916-default_0/image-landscape-fill-422f43da-0956-4d91-8d06-8d0f1f399916-default_0.jpg?ts=1723013675165&w=1920'/>
                <Carousel.Caption className="bg-white text-dark">
                    <h5>CREASED-EFFECT COTTON SHIRT </h5>
                    <p>Dress with a Johnny collar and turn-up short sleeves.</p>
                    <div className="mb-3">
                        <Link to={`/products`}>
                            <Button variant="dark">Shop Now</Button>
                        </Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img class="d-block w-100" style={{height:"100vh",objectFit:"cover"}} 
                src='https://static.zara.net/assets/public/d6b3/3394/03a04e2987bd/baef35d2ff83/image-landscape-fill-0b10464a-c786-496e-859d-9dcbbe05271b-default_0/image-landscape-fill-0b10464a-c786-496e-859d-9dcbbe05271b-default_0.jpg?ts=1723030632700&w=1920'/>
                <Carousel.Caption className="bg-white text-dark">
                    <h5>SNEAKERS </h5>
                    <p>Lace-up trainers..</p>
                    <div className="mb-3">
                        <Link to={`/products`}>
                            <Button variant="dark">Shop Now</Button>
                        </Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Fragment>
  )
}
