import React, { useState, useEffect } from 'react';
import {Container,Col,Row,Card} from 'react-bootstrap';
import TodoForm from './form.jsx';
import TodoList from './list.jsx';
import './todo.scss';

const ToDo=(props)=> {
  const [list, setList] = useState([]);

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }

  };

  useEffect(()=> {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
    ];

    setList(list);
  },[]);

  useEffect(()=>{
    document.title = `Now You Completed ${list.filter(item => item.complete).length} Item(s) And Still Yon Need To Do ${list.filter(item => !item.complete).length} Item(s)`;
    // list.filter(item => item.complete).length===0 ? document.title = 'Congrats You Are Done';
  })
  
    return (
      <>
        <header>
          <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
          </h2>
        </header>

        <Container fluid="md" style={{ marginTop: '4rem' }}>
         <Row className="justify-content-md-center">
          <Col md={3}>
           <Card >
            <TodoForm handleSubmit={addItem} />
           </Card>
          </Col>
          <Col md={{ span: 7, offset: 0 }}>
           <div>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
            />
           </div>
          </Col>
         </Row>
        </Container>
      </>
    );
  }


export default ToDo;