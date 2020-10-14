import React from "react";
import {Container, Row, Col,} from "react-bootstrap";
import InputField from "./InputField";

function App() {
  return (
    <div className="main">
      <Container>
        <Row>
          <Col>
           <InputField />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
