import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import InputField from "./InputField";
import UserList from "./UserList";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state={
      users:[],
      user:{
        name:"",
        email:""
      },
      isEdit:false,
    }
  }
  
  onformSubmit= async (data)=>{

    const response = await axios.get("http://localhost:3001/users")
    this.setState({users:response.data})
       
       
  }

  async componentDidMount() {
    const response = await axios.get("http://localhost:3001/users");
    this.setState({ users: response.data });
  }

  editUser= async (id)=>{
    const response = await axios.get(`http://localhost:3001/users/${id}`)
    this.setState({user:response.data, isEdit:true});
  }


  render() {
    return (
      <div className="main">
        <Container>
          <Row>
            <Col>
              <InputField  onSubmit={this.onformSubmit} user={this.state.user} isEdit={this.state.isEdit}/>
              <div className="user-wrapper">
                <UserList data={this.state.users} edit={this.editUser}/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
