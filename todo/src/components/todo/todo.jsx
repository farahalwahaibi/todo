import React, { useState, useEffect } from 'react';
import {Container,Col,Row,Card} from 'react-bootstrap';
import TodoForm from './form.jsx';
import TodoList from './list.jsx';
import './todo.scss';
//import ajax
import useAjax from '../hooks/useAjax.jsx' 

const ToDo=(props)=> {
  const [list, setList] = useState([]);
  let url = 'https://api-js401.herokuapp.com/api/v1/todo';

  const addItem = (item) => {
    item.complete = false;

    async function _add() {
      let results = await useAjax({ url, body: item, method: 'post' })
      item._id = results.data._id;
      setList([...list, item]);
    }
    _add();
  }


  const toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    //check if the item complete
    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }
    //for complete
    async function _Complete() {
      await useAjax({ url: `${url}${item._id}`, body: item, method: 'put' });
    }
    _Complete();
  };
  

  // useEffect(()=> {
  //   let list = [
  //     { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
  //     { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
  //     { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
  //     { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
  //     { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
  //   ];

  //   setList(list);
  // },[]);

  // useEffect(()=>{
  //   document.title = `Now You Completed ${list.filter(item => item.complete).length} Item(s) And Still Yon Need To Do ${list.filter(item => !item.complete).length} Item(s)`;
  //   // list.filter(item => item.complete).length===0 ? document.title = 'Congrats You Are Done';
  // })

  //for delete
  function handleDelete(id) {
    async function _handleDelete(id) {
      await useAjax({ url: url + id, method: 'delete' });
      let newItemList = list.filter(item => item._id !== id);
      return setList(newItemList);
    }
    _handleDelete(id);
  }

  useEffect(() => {
    async function _getData() {
      let response = await useAjax({ url, method: 'get' });
      setList(response.data.results)
    }
    _getData();
  }, []);

  
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
              handleDelete={handleDelete}
            />
           </div>
          </Col>
         </Row>
        </Container>
      </>
    );
  }


export default ToDo;