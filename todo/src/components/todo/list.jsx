import React from 'react';
import { Toast, Badge } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const TodoList =(props) => {

 
//     return (
//       <ul>
//         {props.list.map(item => (
//           <Toast 
//           autohide={false} onClose={()=>props.handleDelete(item._id)}
//             className={`complete-${item.complete.toString()}`}
//             key={item._id}
//           >
//           <Toast.Header>
//           <ListGroup.Item style={{cursor:'pointer'}} variant={(item.complete) ? 'danger' : 'success'}
//             className={`complete-${item.complete.toString()}`}
//             key={item._id}
//           >
//            </Toast.Header>
//             <span onClick={() => props.handleComplete(item._id)}>
//               {item.text}
//             </span>
//           </ListGroup.Item> 
//         ))}
//       </ul>
//     );
  
// }
return (

  <ListGroup style={{height:'10rem'}}>
    {props.list.map(item => (
      <Toast 
      autohide={false} onClose={()=>props.handleDelete(item._id)}
        className={`complete-${item.complete.toString()}`}
        key={item._id}
      >
        <Toast.Header>
          <Badge pill variant={item.complete ? "success":"danger"}>{item.complete ? "Complete" : "Pending..."}</Badge>
          <strong className="mr-auto" style={{ marginLeft: '20px' }}>{item.assignee}</strong>
        </Toast.Header>
        <Toast.Body onClick={() => props.handleComplete(item._id)}>{item.text}
          <br/>
          <div style={{float:'right'}}class="difficultly">difficulty : {item.difficulty}</div>
        </Toast.Body>
      </Toast>
    ))}
  </ListGroup>
);
}


export default TodoList;