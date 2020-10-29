import React from "react";
import ReactDOM from "react-dom"
import { Modal, Button } from "react-bootstrap";
import history from "./History";

function ModalArea(props) {
  return ReactDOM.createPortal(
    <div className="modal-wrapper" onClick={()=>history.push("/")}>
      <Modal.Dialog onClick={(e)=>e.stopPropagation()}>
        <Modal.Header>
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