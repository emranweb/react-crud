import React from "react";
import { Container, Row, Col, Form, FormControl, FormGroup, Button } from "react-bootstrap";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state={
      users:[],
      user:{
        name:"",
        email:"",
        id:""
      },
      isEdit:false,
    }
  }
  
  async componentDidMount() {
    const response = await axios.get("http://localhost:3001/users");
    this.setState({ users: response.data });
  }

  
  onInputChange = (e) => {
    e.persist();
    const {user} = this.state;
       user[e.target.name] = e.target.value;
       this.setState({user:user})
  };

  onSubmitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users", this.state.user);
    this.setState({user:{
      name:"",
      email:""
    }});
   
    this.renderData();
  };


  renderData=async ()=>{
   const response = await axios.get("http://localhost:3001/users");
   this.setState({users:response.data});
  }

  editUser= async (id)=>{
    const response = await axios.get(`http://localhost:3001/users/${id}`);
    const data = response.data;
  }

  render() {
    return (
      <div className="main">
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
            {
              this.state.users.map((item) => {
                return (
                  <div key={item.id}>
                    <h3>{item.name}</h3>
                    <h4>{item.email}</h4>
                    <Button onClick={(id) => this.props.delete(item.id)} type="button">
                      Delate
                    </Button> 
                    <Button onClick={() => this.editUser(item.id)} type="button">
                      Edit
                    </Button>
                  </div>
                )
              })
            }
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
