import React, { useEffect, useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism.css';

const CodeEditor = ({ value, type }) => {
  const [code, setCode] = useState('');
  
  useEffect(() => {
    setCode(value);
  }, [value])

	const handleChange = (value) => setCode(value);

	return (
    <div className="container_editor_area">
      <Editor
        value={code}
        onValueChange={handleChange}
        highlight={code => highlight(code, languages[type])}
        padding={20}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
        className="container__editor"
      />
    </div>
	);
}

export default CodeEditor;