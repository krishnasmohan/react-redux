import React, { Fragment } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Card, CardBody, CardHeader, CardText, CardTitle, Container, FormControl, FormGroup, FormLabel } from 'react-bootstrap'

export const Contact = () => {
  return (
    <Fragment>
        <Header />
        <Container>
          <div className='w-50 mx-auto my-5'></div>
          <Card>
            <CardHeader>
              <h1 className='text-center'>WE'D LOVE TO HEAR FROM YOU</h1>
              <h3 className='text-center'>Contact with us</h3>
            </CardHeader>
            <CardBody>
              <CardTitle className='text-center mb-0'>Call us</CardTitle>
              <CardText className='text-center mb-0'>****-***-****</CardText>
              <CardText className='text-center'>Free of charge</CardText>
              <CardTitle className='text-center mb-0'>Email</CardTitle>
              <CardText className='text-center'>smith@exapmle.com</CardText>
              <CardTitle className='text-center'>Opening Hours</CardTitle>
              <CardText className='text-center'>Monday – Sunday: 8.00 – 22.00</CardText>
              <CardTitle className='text-center'>LETS'S CONNECT ON SOCIAL MEDIA</CardTitle>
              <CardText className='text-center mb-0'><a href='#' className='text-decoration-none'>Facebook</a></CardText>
              <CardText className='text-center'><a href='#' className='text-decoration-none'>Instagram</a></CardText>
            </CardBody>
          </Card>
        </Container>
        <div className='mb-100' style={{height:"100px"}}></div>
        <Footer />
    </Fragment>
  )
}
