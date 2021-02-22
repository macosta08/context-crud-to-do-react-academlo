import TodoContainerProvider from "./context/TodoContainerContext";
import { CreateTodo } from "./components/createTodo/CreateTodo";
import { TodoContainer } from "./components/todoContainer/TodoContainer";
import { Col, Container, Row } from "react-bootstrap";
import AssignmentIcon from "@material-ui/icons/Assignment";
import pink from "@material-ui/core/colors/pink";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <TodoContainerProvider>
      <div className="App">
        <div className="icon-nav">
          <Container>
            <Row>
              <Col>
                <AssignmentIcon style={{ fontSize: 100, color: pink[100] }} />
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <div className="App-header">
            <CreateTodo />
            <TodoContainer />
          </div>
        </Container>
      </div>
    </TodoContainerProvider>
  );
}

export default App;
