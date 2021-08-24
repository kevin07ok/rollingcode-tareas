import React from "react";
import Button from "react-bootstrap/Button";

const BottonAgregar = () => {
  return (
    <div className="container text-center mb-4">
      <Button variant="danger" size="lg" className="w-50">
        <h2 className="display-6 text-light">AGREGAR TAREA</h2>
      </Button>
    </div>
  );
};

export default BottonAgregar;
