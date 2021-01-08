import React, { useEffect, useState } from 'react';
import dedent from "dedent-tabs";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism.css';

const ex = dedent`
  import React from "react";
  import ReactDOM from "react-dom";

  const App = () => {
    return (
      <h1>Hello There! It's me, Mika</h1>
    );
  }
  ReactDOM.render(<App />, document.getElementById("root"));
`;


const CodeEditor = ({ value, type }) => {
  const [code, setCode] = useState('');
  
  useEffect(() => {
    setCode(value);
  }, [value])

	const handleChange = (value) => setCode(value);

	return (
		<Editor
			value={code}
			onValueChange={handleChange}
			highlight={code => highlight(code, languages[type])}
			padding={10}
			style={{
				fontFamily: '"Fira code", "Fira Mono", monospace',
				fontSize: 12,
			}}
		/>
	);
}

export default CodeEditor;