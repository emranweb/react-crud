import React from "react";
import { Button } from "react-bootstrap";
<<<<<<< HEAD
import ModalArea from "./Modal";
=======
>>>>>>> 2f47af07397c6956c97915c9020cd0b115ffe0e7

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
          <Button onClick={(id) => this.props.delete(item.id)} type="button">
            Delate
          </Button>
<<<<<<< HEAD
          <Button onClick={() => this.setState({show:true})} type="button">
=======
          <Button onClick={() => this.props.edit(item.id)} type="button">
>>>>>>> 2f47af07397c6956c97915c9020cd0b115ffe0e7
            Edit
          </Button>
        </div>
      );
    });
  }
}

export default UserList;
