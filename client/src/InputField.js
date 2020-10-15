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
    e.persist()
    this.setState({[e.target.name]:e.target.value})
  }


  onSubmitForm=(e)=>{
    e.preventDefault();
    this.props.data(this.state);
  }

  render() {
    return (
      <div className="input-wrapper">
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h1 className="mt-5">Informaton</h1>
              <Form className="form-wrappr mt-3" onSubmit={this.onSubmitForm}>
                <FormGroup>
                  <FormControl
                    type="text"
                    name="name"
                    value={this.state.name}
                    placeholder="type your name"
                    onChange={this.onInputChange}
                    
                  />
                </FormGroup>
                <FormGroup>
                  <FormControl
                    type="email"
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
