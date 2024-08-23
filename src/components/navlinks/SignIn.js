import React, { Fragment, useState } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Card, CardBody, CardHeader, Container } from 'react-bootstrap'


export default function SignIn() {
    const [formData, setFormData] = useState({
        name:"",
        phone:""
    });
    const [error,setError] = useState({})

    function updateInput(event){
        setFormData(()=>({
            ...formData,[event.target.name]:event.target.value
        }))
        
    }
    let err={}
    function validation(){
        if(formData.name === ""){
            err.name = "Field required"
        }
        if(formData.phone === ""){
            err.phone = "Field required"
        }
        setError({...err})
        return Object.keys(err)<1;
    }

    function handleSubmit(e){
        e.preventDefault();
        let formValid = validation()
        if(formValid){
            alert("Form Submitted")
        }
    }


  return (
    <Fragment>
        <Header />
        <Container>
            <Card>
                <CardHeader>
                    <h1 className='text-center'>Sign In</h1>
                </CardHeader>
                <CardBody>
                    <div className='d-flex justify-content-center'>
                        <form className='d-flex justify-content-center flex-column' style={{width:"300px"}}>
                            <label className='mb-3'>Name</label>
                            <input type='text' name='name' onChange={updateInput}/>
                            <span  className=' mb-5' style={{color:"red", height:"30px"}}>{error.name}</span>
                            <label className='mb-3'>Phone Number</label>
                            <input type='number' name='phone' onChange={updateInput} />
                            <span  className=' mb-5' style={{color:"red", height:"30px"}}>{error.phone}</span>
                            <button type='submit' className='btn btn-sm bg-dark text-white fs-6' onClick={handleSubmit} >Submit</button>
                        </form>
                    </div>
                    
                </CardBody>
            </Card>
        </Container>
        <div className='mb-5 pb-5'></div>
        <div className='mb-5 pb-5'></div>
        
        <Footer />
    </Fragment>
  )
}
