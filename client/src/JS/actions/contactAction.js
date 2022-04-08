import axios from "axios";

import {
    EDIT_CONTACT,
    GET_CONATCT_FAIL,
    GET_CONATCT_LOAD,
    GET_CONATCT_SUCCESS,
    GET_ONE_CONTACT
} from "../constant/actionsTypes.js";

export const getContacts = ()=>async(dispatch)=>{
    dispatch({type:GET_CONATCT_LOAD})
    try {
        let result = await axios.get('/api/contact/')
        dispatch({type:GET_CONATCT_SUCCESS,payload:result.data.result})
        
    } catch (error) {
        dispatch({type:GET_CONATCT_FAIL,payload:error})
        console.log(error)
    }
}

export const deleteContact = (id)=>(dispatch)=>{
    try {
        axios
        .delete(`/api/contact/${id}`)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}

export const getContact = (id)=>(dispatch) =>{
    axios
    .get(`/api/contact/${id}`)
    .then((res)=>dispatch({type:GET_ONE_CONTACT,payload: res.data.result},console.log(res.data)))
    .catch((err)=>console.log(err))
}

export const editContact =(id,user)=>(dispatch)=>{
    axios
    .put(`/api/contact/${id}`,user)
    .then((res)=>dispatch({type:EDIT_CONTACT,payload:res.data.message},console.log(res)))
    .catch((err)=>console.log(err))
}

export const postContact = (user)=>async(dispatch)=>{
    try {
        await axios.post (`/api/contact/name`,user)
        dispatch(getContacts());
    } catch (error) {
        console.log(error)
    }
}