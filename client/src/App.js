import React from "react";
import {Container, Row, Col,} from "react-bootstrap";
import InputField from "./InputField";
import UserList from "./UserList";

class App extends React.Component {
   constructor(){
     super();
     this.data=[]
     this.state={user:[]}
   }

   formData=(data)=>{
      this.data.push(data)
      this.setState({user:this.data})
   }

  render(){
    return (
      <div className="main">
        <Container>
          <Row>
            <Col>
             <InputField  data={this.formData}/>
             <div className="user-wrapper">
                <UserList data={this.state.user}/>
             </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
}

export default App;
