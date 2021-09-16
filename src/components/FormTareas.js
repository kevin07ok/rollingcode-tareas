import React from "react";
import { Fragment } from "react";
import { Container, Form, Button, FormGroup } from "react-bootstrap";

const FormTareas = () => {
  return (
    <Fragment>
        <Container className="my-4">
        <Form>
        <h1 className="my-4 text-center">Mis Nuevas Tareas</h1>
        <FormGroup className='my-2'>Agregar *</FormGroup>
          <Form.Control
            type="text"
            placeholder=" Tarea"
          ></Form.Control>
          <div className='text-center my-4'>
          <h3>Estado</h3>
          <Form.Check inline type="radio" label="Completa" name='estado'></Form.Check>
          <Form.Check inline type="radio" label="Incompleta" name='estado'></Form.Check>
          </div>
          </Form>
        <Button variant="danger" type="submit" className="w-100 my-3">
          Agregar Tarea
        </Button>
        </Container>
      </Fragment>
      
  );
};

export default FormTareas;
