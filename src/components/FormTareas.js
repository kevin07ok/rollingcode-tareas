import { Fragment, useState } from "react";
import { Container, Form, Button, FormGroup } from "react-bootstrap";

const FormTareas = () => {
  const [nombreTarea, setNombreTarea] = useState("");
  const [categoria, setCategoria] = useState("");


  const handleSubmit = (e) =>{
      e.preventDefault();
      // validar los datos //

      // enviar el producto a la api //
      
  }

  return (
    <Fragment>
      <Container className="my-4">
        <Form onSubmit={handleSubmit}>
          <h1 className="my-4 text-center">Mis Nuevas Tareas</h1>
          <FormGroup className="my-2">Agregar *</FormGroup>
          <Form.Control
            type="text"
            placeholder=" Tarea"
            onChange={(e) => setNombreTarea(e.target.value)}
          ></Form.Control>
          <div className="text-center my-4">
            <h3>Categoria</h3>
            <Form.Check
              inline
              type="radio"
              label="Completa"
              name="estado"
              value="completa"
              onChange={(e) => setCategoria(e.target.value)}
            ></Form.Check>
            <Form.Check
              inline
              type="radio"
              label="Incompleta"
              name="estado"
              value="incompleta"
              onChange={(e) => setCategoria(e.target.value)}
            ></Form.Check>
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
