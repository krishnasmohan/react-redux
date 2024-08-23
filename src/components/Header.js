import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, NavLink} from "react-router-dom"
import { fetchAllCategories } from './store/Categories/CategoriesSlice';
import CartIcon from './navlinks/CartIcon';

export const Header = () => {
  const {categories} = useSelector((state) => state.categories);
  let dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAllCategories())
  },[dispatch])
  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">SHOP NOW</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <NavLink className="nav-link" to={"/"}>Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to={"/products"}>Products</NavLink>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul class="dropdown-menu">
                  {categories && categories.map((c, index) => {
                    return(
                      <Link 
                        key={index}
                        to={`/category/${c}`}
                        className='text-capitilize dropdown-item'
                      >{c}</Link>
                    )
                  })}
                </ul>
              </li>
              <li class="nav-item">
              <NavLink className="nav-link" to={"/contacts"}>Contact</NavLink>
              </li>
            </ul>
            <div class="d-flex justify-content-around" style={{width:"100px"}}>
              <CartIcon />
              <NavLink className="nav-link" to={"/signIn"}><i class="bi bi-person-fill"></i></NavLink>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
    
  )
}
