import React from "react";
import { Button } from "react-bootstrap";
import ModalArea from "./Modal";

class UserList extends React.Component {
   constructor(){
     super();
     this.state={show:false}
   }



  render() {
    return this.props.data.map((item) => {
      return (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <h4>{item.email}</h4>
          <Button onClick={(id) => this.props.deleate(item.id)} type="button">
            Delate
          </Button>
          <Button onClick={() => this.setState({show:true})} type="button">
            Edit
          </Button>
        </div>
      );
    });
  }
}

export default UserList;
