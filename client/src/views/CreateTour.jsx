import React, { useState } from 'react'
// import Form from '../components/Form'
import { useHistory } from 'react-router'
import axios from 'axios';
import { Link } from "react-router-dom";
import Form from '../components/Form';


const CreateTour = (props) => {

    // const {id} = useParams();
    const history = useHistory();
    const[errors , setErrors] = useState([])
    const[success , setSuccess] = useState(false)




    const onSubmitHandler = (tour) => {
        setSuccess(false)
        setErrors([])
        axios.post('http://localhost:8000/api/tour/new', tour)
            .then(res=>{
                console.log(res)
                setSuccess(true)
                // history.push("/")
            })
            .catch(err=>{
                console.log(err)
                const data = err.response.data
                const errorMessages = [];
                if("errors" in data){
                    for(let field in data.errors){
                        const validationError = data.errors[field]
                        errorMessages.push(validationError.message)
                    }
                }
                setErrors(errorMessages)
            })
    }



return (
    <>
    <div className='container mb-5 mt-5 pt-5 col-7 '>
        <div  className='form-border'>

            <div className='container mt-5'>
            
            {success && <p  className='alert alert-success'>Tour has been successafully Add</p>}

            <div className='d-flex justify-content-between mt-3'>
            <div className='text-primary'><h5>Pet Shelter</h5></div>
            <div><Link to="/" className="btn btn-outline-secondary rounded-pill ms-2 ">Back to HOME</Link></div>
            </div>
            <Form onSubmitHandler ={onSubmitHandler} errors={errors} />
            </div>

        </div>
    </div>
    </>
)
}

export default CreateTour