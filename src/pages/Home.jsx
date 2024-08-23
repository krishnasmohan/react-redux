import React, { Fragment } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ImageSlider } from '../components/body/ImageSlider'
import { AllCategories } from '../components/categories/AllCategories'
import ProductContainer from '../components/product/ProductContainer'
export const Home = () => {
  return (
    <Fragment>
        <Header />
        <ImageSlider />
        <AllCategories />
        <ProductContainer />
        <Footer />
    </Fragment>
  )
}
