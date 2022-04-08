import React, { useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux";
import {getContacts} from "../JS/actions/contactAction"
import Contact from './Contact';

const ContactList = () => {
    const dispatch = useDispatch();
 const loadContacts = useSelector((state)=>state.contactReducer.loadContacts);
 const contacts = useSelector((state)=>state.contactReducer.contacts);
 console.log(contacts)

   useEffect(()=>{
       dispatch(getContacts())
// eslint-disable-next-line
   },[])

  return (
    <div style={{display:"flex",flexWrap:"wrap"}}>

        {loadContacts? (
            <h2>loading........</h2>
        ): contacts.length === 0 ? (<h2>there is no contacts</h2>):(
            contacts.map((el)=> <Contact key={el._id} contact={el} />)
        )}
        
    
    </div>
  )
}

export default ContactList