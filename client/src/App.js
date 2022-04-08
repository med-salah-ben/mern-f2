import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import {Button} from "react-bootstrap"

import './App.css';
import ContactList from "./components/ContactList";
import {toggleFalse} from "./JS/actions/edit";
import Home from "./components/Home";
import Add from "./components/Add";

function App() {
  const dispatch = useDispatch();


  return (
  <div>
        <Link to="/"  >
    <Button style={{marginLeft:"35%",width:"12rem"}} variant="info">Go To Home</Button>
    </Link>
    <Link to="/contact" style={{margin:"20px 30px",width:"12rem"}} >
    <Button variant="dark">Go To Our Contacts</Button>
    </Link>
    <Link to="/add">
    <Button style={{margin:"20px 0px",width:"12rem"}} variant="warning" onClick={()=>dispatch(toggleFalse())} >ADD</Button>
    </Link>
    
    <Routes>
      <Route  path="/" element={<Home />} />
       <Route path="/contact" element={<ContactList />}/>
       <Route  path="/add" element={<Add />} />
       <Route  path="/edit/:id" element={<Add />} />

    </Routes>
  </div>
  );
}

export default App;
