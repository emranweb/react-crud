import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  Button,
} from "react-bootstrap";

function App() {
  return (
    <div className="main">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h1 className="mt-5">Informaton</h1>
            <Form className="form-wrappr mt-3">
              <FormGroup>
                <FormControl
                  type="input"
                  name="name"
                  placeholder="type your name"
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="Email"
                  name="name"
                  placeholder="type your Email"
                />
              </FormGroup>
              <Button variant="primary" className="px-5" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
