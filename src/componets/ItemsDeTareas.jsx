import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { useState } from 'react';
const ItemsDeTareas = (props) => {
    /*const [dibujar, setDibujar] = useState(props.arrayTareas);
    function dibujar() {
        props.arrayTareas.map(() => {
            return (
              <ListGroup.Item className="d-flex justify-content-between">
                
                <Button variant="danger">x</Button>
              </ListGroup.Item>
            );
        })
    }*/
    return (
      <>
        <ListGroup.Item className="d-flex justify-content-between">
            {props.arrayTareas}
          <Button variant="danger">x</Button>
        </ListGroup.Item>
      </>
    );
};

export default ItemsDeTareas;