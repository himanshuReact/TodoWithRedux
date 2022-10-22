import React, { useState, useEffect } from "react";
import { addTask } from "../Redux/actionCreator";
import { connect } from "react-redux";

// import AddTask from "./AddTask";
// import DisplayTasks from "./DisplayTasks";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: []
    };
  }
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.task}
          onChange={(e) => this.setState({ task: e.target.value })}
        />
        <button onClick={() => this.props.addTask(this.state.task)}>
          Add Task
        </button>
        <div>
          {this.props.todo.map((item) => (
            <h5>{item.title}</h5>
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  todo: state.todo
});

const mapDispatchToProps = (dispatch) => ({
  addTask: (payload) => dispatch(addTask(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
