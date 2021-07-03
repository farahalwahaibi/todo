//import react
import React from 'react';
//import useform
import useForm from "../hooks/useForm.jsx";
//import from bootstrap
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TodoForm(props) {
  const { handleInputChange, handleSubmit } = useForm(submitFunction);
  function submitFunction(item) {
    return props.handleSubmit(item);
  }

  return (
    <Container>
      <h3>Add Item</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            <Form.Text>To Do Item</Form.Text>
            <Form.Control
              name="text"
              placeholder="Add to Do List Item"
              onChange={handleInputChange}
            />
          </Form.Label>
          <Form.Label>
            <Form.Text>Assigned To</Form.Text>
            <Form.Control
              type="text"
              name="assignee"
              placeholder="Assigned To"
              onChange={handleInputChange} />
          </Form.Label>
          <Form.Label>
            <Form.Text> Difficulty Rating</Form.Text>
            <Form.Control
              defaultValue="1"
              type="range"
              min="0"
              max="5"
              name="difficulty"
              onChange={handleInputChange} />
          </Form.Label>
        </Form.Group>
        <Button variant="dark" type="submit">Add Item</Button>
      </Form>
    </Container>
  );
}

//export todo form
export default TodoForm;



  

