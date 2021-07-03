//import react
import React, { useState, useEffect, useContext } from 'react';
//import If, Then, Else, When, Unless
import { If, Then, Else, When, Unless } from 'react-if';
//import from bootstrap
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast, Badge } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
//import useform
import useForm from '../hooks/useForm';
//import PaginationContext
import { PaginationContext }  from '../hooks/usePagination.jsx';

const TodoList = (props) => {
  const pagination = useContext(PaginationContext);
  return (

    <ListGroup style={{ height: '10rem' }}>
      {pagination.item.map(item => (
        <Toast
          autohide={false} onClose={() => props.handleDelete(item._id)}
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <Toast.Header>
            <Badge pill variant={item.complete ? "success" : "danger"} onClick={() => props.handleComplete(item._id)} style={{ cursor: 'pointer' }}>{item.complete ? "Complete" : "Pending..."}</Badge>
            <strong className="mr-auto" style={{ marginLeft: '20px' }}>{item.assignee}</strong>
          </Toast.Header>
          <Toast.Body>
            {item.text}
            <br />
            <div style={{ float: 'right' }} className="difficultly">difficulty : {item.difficulty}</div>
          </Toast.Body>
        </Toast>
      ))}
    </ListGroup>
  );
}


//export todolist
export default TodoList;