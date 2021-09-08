import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoApp from "./component/todo/TodoApp";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={TodoApp} />
    </Router>
  );
};

export default App;
