import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <div>
          <header className="header">
            <h1>todos</h1>
            <form>
              <input
                className="new-todo"
                placeholder="What needs to be done?"
                value=""
              />
            </form>
          </header>
          <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label for="toggle-all" />
            <ul className="todo-list">
              <li className="completed">
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>Be awesome</label>
                  <button className="destroy" />
                </div>
                <input className="edit" value="Be awesome" />
              </li>
              <li className="editing">
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>Go home</label>
                  <button className="destroy" />
                </div>
                <input className="edit" value="Go home" />
              </li>
              <li className="">
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>Learn React</label>
                  <button className="destroy" />
                </div>
                <input className="edit" value="Learn React" />
              </li>
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
