import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
//import { useState } from 'react';
const ItemsDeTareas = (props) => {
    return (
      <>
        <ListGroup.Item className="d-flex justify-content-between">
          {props.tarea}
          <Button variant="danger">x</Button>
        </ListGroup.Item>
      </>
    );
};

export default ItemsDeTareas;