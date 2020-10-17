import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import InputField from "./InputField";
import UserList from "./UserList";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = { user: [] };
  }

  refreshData = async () => {
    const response = await axios.get("http://localhost:3001/users");
    this.setState({ user: response.data });
  };

  deleateData = async (id) => {
    axios.delete(`http://localhost:3001/users/${id}`);
    this.refreshData();
  };

  async componentDidMount() {
    const response = await axios.get("http://localhost:3001/users");
    this.setState({ user: response.data });
  }

  render() {
    return (
      <div className="main">
        <Container>
          <Row>
            <Col>
              <InputField refresh={this.refreshData} />
              <div className="user-wrapper">
                <UserList data={this.state.user} deleate={this.deleateData} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
