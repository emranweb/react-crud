import React from "react";
import { Button } from "react-bootstrap";
class UserList extends React.Component {

  render() {
    return this.props.data.map((item) => {
      return (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <h4>{item.email}</h4>
          <Button onClick={(id) => this.props.deleate(item.id)} type="button">
            Delate
          </Button>
          <Button onClick={()=>this.props.edit(item.id)} type="button">Edit</Button>
        </div>
      );
    });
  }
}

export default UserList;
