import React from "react";
import ReactDOM from "react-dom"
import { Modal, Button } from "react-bootstrap";

function ModalArea(props) {
  return ReactDOM.createPortal(
    <div>
      <Modal.Dialog show={props.show}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>, 
    document.querySelector("#modal")
  );
}

export default ModalArea;