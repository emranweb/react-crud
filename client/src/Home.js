import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  FormGroup,
  Button,
} from "react-bootstrap";
import axios from "axios";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      user: {
        name: "",
        email: "",
        id: "",
      },
      isEdit: false,
    };
  }

  async componentDidMount() {
    const response = await axios.get("http://localhost:3001/users");
    this.setState({ users: response.data });
  }

  onInputChange = (e) => {
    e.persist();
    const { user } = this.state;
    user[e.target.name] = e.target.value;
    this.setState({ user: user });
  };

  onSubmitForm = async (e) => {
    e.preventDefault();

    if (this.state.user.id === "") {
      await axios.post("http://localhost:3001/users", this.state.user);

      this.setState({
        user: {
          name: "",
          email: "",
          id: "",
        },
      });

      this.renderData();
    } else {
      await axios.put(
        `http://localhost:3001/users/${this.state.user.id}`,
        this.state.user
      );
      this.setState({ user: { name: "", email: "", id: "" } });
      this.renderData();
    }
  };

  renderData = async () => {
    const response = await axios.get("http://localhost:3001/users");
    this.setState({ users: response.data });
  };

  editUser = async (id) => {
    const response = await axios.get(`http://localhost:3001/users/${id}`);
    const data = response.data;
    this.setState({ user: data });
  };

  delete = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    this.renderData();
  };

  render() {
    return (
      <div className="home">
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h1 className="mt-5">Informaton</h1>
              <Form className="form-wrappr mt-3" onSubmit={this.onSubmitForm}>
                <FormGroup>
                  <FormControl
                    type="text"
                    name="name"
                    value={this.state.user.name}
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
                    value={this.state.user.email}
                  />
                </FormGroup>
                <Button variant="primary" className="px-5" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
          <Row>
            <div className="list-group mt-5">
              {this.state.users.map((item) => {
                return (
                  <div key={item.id} className="list-group-item">
                    <h3>{item.name}</h3>
                    <h4>{item.email}</h4>
                    <Button
                      className="mx-3"
                      onClick={() => this.editUser(item.id)}
                      type="button"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={(id) => this.delete(item.id)}
                      type="button"
                    >
                      Delate
                    </Button>
                  </div>
                );
              })}
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
