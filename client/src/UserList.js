import React from "react";

class UserList extends React.Component {
  render() {
    return this.props.data.map((item) => {
      return (
        <div key={item.name+"rt"}>
          <h3>{item.name}</h3>
          <h4>{item.email}</h4>
        </div>
      );
    });
  }
}

export default UserList;
