import React, { Component } from "react";
import { connect } from "react-redux";

import { addTask, removeTask, completeTask } from "../../actions/actions";

import ToDoInput from "../../components/todo-input/todo-input";
import ToDoList from "../../components/todo-list/todo-list";

import "./todo.scss";

class ToDo extends Component {
  state = {
    taskText: ""
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value
    });
  };

  handleButton = () => {};

  addTask = () => {
    const { taskText } = this.state;
    const { addTask } = this.props;
    addTask(new Date().getTime(), taskText, false);
    this.setState({
      taskText: ""
    });
  };

  render() {
    const { tasks, removeTask, completeTask } = this.props;

    return (
      <div className="wrapper">
        <ToDoInput
          onClick={this.addTask}
          onChange={this.handleInputChange}
          value={this.state.taskText}
        />
        <ToDoList
          tasksList={tasks}
          completeTask={completeTask}
          removeTask={removeTask}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    tasks: state.tasks
  }),
  { addTask, removeTask, completeTask }
)(ToDo);
