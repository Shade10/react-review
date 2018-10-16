import React, { Component } from "react";

class App extends Component {
  state = {
    tasks: [
      { id: 1, className: "completed", title: "Be some" },
      { id: 2, className: "editing", title: "Home" },
      { id: 3, className: "", title: "Learn" }
    ],
    taskTitle: "",
    isDone: "",
    error: null
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.taskTitle === "") {
      this.setState({
        error: new Error("Sorry we need task title to make it work")
      });
      return;
    }
    // this.props.addTaskFunction(this.state.taskTitle);
    this.addTask(this.state.taskTitle)
    this.setState({ taskTitle: "", error: null });
  };

  handleChange = event => {
    this.setState({
      taskTitle: event.target.value
    });
  };

  addTask = title => {
    this.setState({
      tasks: this.state.tasks.concat({
        id: Date.now(),
        title: title
      })
    });
  };

  removeTask = taskId => {
    this.setState({
      tasks: this.state.tasks.filter(
        task => taskId !== task.id
      )
    })
  }

  render() {
    return (
      <section className="todoapp">
        <div>
          <header className="header">
            <h1>todos</h1>
            <form onSubmit={this.handleSubmit}>
              {this.state.error ? (
                <label>{this.state.error.message}</label>
              ) : (
                this.addTask
              )}
              <input
                className="new-todo"
                placeholder="What needs to be done?"
                value={this.state.taskTitle}
                onChange={this.handleChange}
              />
            </form>
          </header>

          <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label for="toggle-all" />
            <ul className="todo-list">
              {this.state.tasks.map(task => (
                <li className={task.className} key={task.id}>
                  <div className="view">
                    <input className="toggle" type="checkbox" />
                    <label>{task.title}</label>
                    <button className="destroy" onClick={() => this.removeTask(task.id)}/>
                  </div>
                  <input className="edit" value={task.title} />
                </li>
              ))}

              
            </ul>
          </section>

          <footer className="footer">
            <span className="todo-count">
              <strong>2</strong>
              <span> </span>
              <span>items</span>
              <span> left</span>
            </span>

            <ul className="filters">
              <li>
                <a href="#/" className="selected">
                  All
                </a>
              </li>

              <span> </span>

              <li>
                <a href="#/active" className="">
                  Active
                </a>
              </li>

              <span> </span>

              <li>
                <a href="#/completed" className="">
                  Completed
                </a>
              </li>
            </ul>
            <button className="clear-completed">Clear completed</button>
          </footer>
        </div>
      </section>
    );
  }
}

export default App;
