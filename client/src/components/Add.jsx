import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { editContact, postContact } from '../JS/actions/contactAction';
import {Form,Button} from "react-bootstrap";


const Add = () => {
  const dispatch = useDispatch();
  const [user,setUser] = useState({name:"",email:"",phone:""})
  const userReducer = useSelector((state)=>state.contactReducer.user)
  const edit = useSelector((state)=>state.editReducer.edit)

console.log("f",userReducer)

  useEffect(()=>{
    edit ? setUser(userReducer):setUser({name:"",email:"",phone:""});
  },[userReducer,edit])
  console.log("s ",userReducer)

  
const handleChange =(e)=>{
  e.preventDefault()
  setUser({...user,[e.target.name]:e.target.value})
}

const handleContact = ()=>{
  if(!edit){
     dispatch(postContact(user))
  }else{
    dispatch(editContact(userReducer._id,user))
  }
}

 return (
  <Form.Group className="mb-3" style={{margin:"0 25% 0 25%"}} >
      <Form.Label>First Name</Form.Label>
      <Form.Control placeholder='First Name' value={user.name} name="name" onChange={handleChange}  />
      <Form.Label>Email</Form.Label>
      <Form.Control placeholder='Email' value={user.email} name="email" onChange={handleChange} />
    <Form.Label>Phone</Form.Label>
      <Form.Control placeholder='Phone' value={user.phone} name="phone" onChange={handleChange} />
    <Link to="/contact">
    <Button style={{marginTop:"1rem"}} type='submit' onClick={handleContact} > {edit ? "Edit" : "Save"} </Button >
    </Link>
  </Form.Group>
)}

export default Add