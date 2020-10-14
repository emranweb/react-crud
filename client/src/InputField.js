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

class InputField extends React.Component {
  constructor() {
    super();
    this.state = {
        name: "",
        email: "",
      };
  }

  onInputChange=(e)=>{
    console.log(e)
    //this.setState({[name]:e.targe.value});
  }

  render() {
    return (
      <div className="input-wrapper">
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h1 className="mt-5">Informaton</h1>
              <Form className="form-wrappr mt-3">
                <FormGroup>
                  <FormControl
                    type="input"
                    name="name"
                    value={this.state.name}
                    placeholder="type your name"
                    onChange={this.onInputChange}
                    
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type="Email"
                    name="email"
                    placeholder="type your Email"
                    onChange={this.onInputChange}
                    value={this.state.email}
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
}

export default InputField;
