//import react and useState
import React, { useState } from 'react';

const useForm = (props) => {
    const [item, setItem] = useState({});
    //for handleInputChange
    const handleInputChange = (e) => {
      setItem({ ...item, [e.target.name]: e.target.value });
    };
    //for handleSubmit
    const handleSubmit = (e) => {
      e.preventDefault();
      e.target.reset();
      props(item);
      setItem({});
    };
    //export handleInputChange, handleSubmit
    return [
        handleInputChange,
        handleSubmit,
    ]
}

//export useForm
export default useForm;


