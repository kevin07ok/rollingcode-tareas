import React from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

const BottonAgregar = () => {
  let history = useHistory();
  const handleClick = () => {
    history.push("/tareas/nueva")
  }

  return (
    <div className="container text-center mb-4">
      <Button type="button" variant="danger" size="lg" className="w-50" onClick={handleClick} >
        <h2 className="display-6 text-light">AGREGAR TAREA</h2>
      </Button>
    </div>
  );
}
export default BottonAgregar;
