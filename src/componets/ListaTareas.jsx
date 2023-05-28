import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ItemsDeTareas from "./ItemsDeTareas";
const ListaTareas = (props) => {
  return (
    <>
      <ListGroup>
        <ItemsDeTareas arrayTareas ={props.arrayTareas}></ItemsDeTareas>
      </ListGroup>
    </>
  );
};

export default ListaTareas;
