import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./category.css"

export const CategoryCard = ({categories}) => {
  return (
    <Link to={`category/${categories}`} className='text-decoration-none text-dark'>
        <Card className='custom-card'>
            <Card.Body>
                <Card.Text className='text-capitalize'>{categories}</Card.Text>
            </Card.Body>
        </Card>
    </Link>
  )
}
