import Todolist from "./components/TodoList/Todolist";
import DoneList from "./components/DoneList/DoneList";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import "antd/dist/antd.css";
import { Divider } from "antd";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Todo List</h1>
        <Divider />
        <div className="list-warpper">
          <Todolist className="todoList"></Todolist>
          <DoneList className="doneList"></DoneList>
        </div>
      </div>
    </Provider>
  );
}

export default App;
