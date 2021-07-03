//import react
import React, { useContext } from 'react';
//import PaginationContext
import { PaginationContext } from '../hooks/usePagination.jsx';
//importing from bootstrap
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Dropdown, ButtonGroup, Button } from 'react-bootstrap';


const Pagination = ({ allitems }) => {
    const pageNumbers = [];
    const pagination = useContext(PaginationContext);
    let num = Math.ceil(allitems / pagination.PerPage)
    for (let i = 1; i <= num; i++) {
        pageNumbers.push(i);

    }
    const onChange = (e) => {
        pagination.setItems(e)
    }

    return (
        <>
            <ButtonGroup style={{ height: "3rem" }}>
                <DropdownButton onSelect={onChange} as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="2">2</Dropdown.Item>
                    <Dropdown.Item eventKey="4">4</Dropdown.Item>
                    <Dropdown.Item eventKey="6">6</Dropdown.Item>
                </DropdownButton>
                {pageNumbers.map(number => (
                    <Button style={{ cursor: 'pointer' }} variant="dark" key={number} className='item' onClick={() => pagination.pag(number)}>
                        {number}
                    </Button>
                ))}
                <Button className='item' style={{ cursor: 'pointer' }} onClick={pagination.thisPage > 1 ? () => pagination.pag(pagination.thisPage--) : () => pagination.pag(pagination.thisPage)} >
                    Previous
                    </Button>
                <Button style={{ cursor: 'pointer' }} onClick={pageNumbers.length !== pagination.thisPage ? () => pagination.pag(pagination.thisPage++) : () => pagination.pag(pagination.thisPage)} className='item'>
                    Next
                    </Button>
            </ButtonGroup>
        </>
    );
};

//export pagination
export default Pagination;