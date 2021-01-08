import React from "react";
import dedent from "dedent-tabs";

import CodeEditor from "./CodeEditor";
import "./styles.css";

const json = dedent`
  {
    "name": "photoapp",
    "version": "0.1.0",
    "private": true
  }
`;

const jsx = dedent`
  import React from "react";
  import ReactDOM from "react-dom";

  const App = () => {
    return (
      <h1>Hello There! It's me, Mika</h1>
    );
  }
  ReactDOM.render(<App />, document.getElementById("root"));
`;

const js = dedent`
  const sum = (a, b) => a + b;
  const result1 = sum(1 + 5);
  console.log('sum', result1);

  // 6
`;
const App = () => {
  return (
    <div className="App">
      <CodeEditor value={json} type="json" />
      <CodeEditor value={jsx} type="jsx" />
      <CodeEditor value={js} type="js" />
    </div>
  );
}

export default App;