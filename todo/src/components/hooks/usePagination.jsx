//import react and useState
import React, { useState } from 'react';
//export PaginationContext from create context
export const PaginationContext = React.createContext();

//Pagination function
function Pagination(props) {

  const [thisPage, setThisPage] = useState(1);
  const [PerPage, setPerPage] = useState(3);
  const indexOfLastItem = thisPage * PerPage;
  const indexOfFirstItem = indexOfLastItem - PerPage;

  //sorting for assignment state
  const list = props.list.sort((a, b) => {
    if (a.difficulty > b.difficulty) {
      return 1;
    } else {
      return -1;
    }
  });

  let item = list.slice(indexOfFirstItem, indexOfLastItem);
  const pag = pageNumber => setThisPage(pageNumber);
  const setItems = numberOfPages => setPerPage(numberOfPages);

  const state = {
    thisPage,
    PerPage,
    setThisPage,
    setPerPage,
    pag,
    item,
    setItems,
  }
  //return the PaginationContext
  return (
    <PaginationContext.Provider value={state}>
      {props.children}
    </PaginationContext.Provider>
  );
}

export default Pagination;