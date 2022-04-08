import React from 'react';
import {useDispatch} from "react-redux"
import { Link } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';
import { deleteContact,getContact } from '../JS/actions/contactAction';
import { toggleTrue } from '../JS/actions/edit';


const Contact = ({contact}) => {
    console.log(contact)
    const dispatch = useDispatch();
  return (
    <Card.Group style={{margin:"10px 25px"}} >
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_960_720.png'
        />
        <Card.Header> {contact.name} </Card.Header>
        <Card.Meta>{contact.email}</Card.Meta>
        <Card.Description>
          Phone : <strong> {contact.phone} </strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Link to={`/edit/${contact._id}`}>
          <Button basic color='green' onClick={()=>{dispatch(getContact(contact._id));dispatch(toggleTrue())}}>
            Edit
          </Button>
          </Link>
          <Button basic color='red' onClick={()=>dispatch(deleteContact(contact._id))}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
    </Card.Group>
  )
}

export default Contact