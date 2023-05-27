import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulariotarea = () => {
  return (
    <>
      <Form>
          <Form.Label>Ingrese Tarea</Form.Label>
        <Form.Group className="mb-3 d-flex" controlId="tareas">
          <Form.Control type="text" placeholder="Ej: hacer la comida" />
        <Button variant="primary" type="submit">+</Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default Formulariotarea;
