import React, { useCallback, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { abcdef } from '@uiw/codemirror-themes-all';

export const Editor = () => {
  const [code, setCode] = useState("console.log('hello zen!');");
  const onChange = useCallback((value: any, viewUpdate: any) => {
    console.log('value:', value);
    setCode(value);
  }, []);
  return (
    <CodeMirror
      value={code}
      minHeight="90vh"
      minWidth="100vw"
      height="100%"
      width="100%"
      basicSetup={{ highlightActiveLine: false }}
      theme={abcdef}
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
    />
  );
};
