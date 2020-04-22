import React from "react";

class App extends React.Component {
  state = {
    resource: "posts"
  };
  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.setState({ resource: "post" })}>
            Posts
          </button>
          <button onClick={() => this.setState({ resource: "todo" })}>
            Todos
          </button>
          {this.state.resource}
        </div>
      </div>
    );
  }
}
export default App;
