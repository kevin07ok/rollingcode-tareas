import React from 'react';
import { Fragment } from 'react';
import { Container, Form } from 'react-bootstrap';

const FormTareas = () => {
    return (
        <Fragment>
            <Container>
                <Form>
                    <Form.Label>Agregue Su Tarea</Form.Label>
                    <Form.Control type="text" placeholder="agregue una tarea"></Form.Control>
                    <h3>Estado</h3>
                    <Form.Check inline type="radio" label="Completa"></Form.Check>
                    <Form.Check inline type="radio" label="Incompleta"></Form.Check>
                </Form>
            </Container>
        </Fragment>
    );
};

export default FormTareas;