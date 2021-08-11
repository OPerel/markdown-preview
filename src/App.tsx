import React, { useEffect, useState } from 'react';
import './App.css';
import marked from "marked";
import TextEditor from "./components/TextEditor/TextEditor";
import Previewer from "./components/Previewer/Previewer";
import Renderer from "./components/Renderer/Renderer";

const App: React.FC = () => {

  const [text, setText] = useState<string>('');
  const [displayRenderer, setDisplayRenderer] = useState<boolean>(false);
  const html = marked(text);

  const setTextContent = (text: string): void => {
    localStorage.setItem('text', text);
    setText(text);
  }

  const cleanTextEditor = (): void => {
    localStorage.setItem('text', '');
    setText('');
  }

  useEffect(() => {
    const initialState = localStorage.getItem('text') || '';
    setText(initialState);
  }, [])

  return (
    <div className="App">
      <div className="previewer">
        <TextEditor text={text} setText={setTextContent} />
        <Previewer html={html} />
      </div>
      <button
        onClick={() => cleanTextEditor()}
      >
        Clean Text Editor
      </button>
      <button>
        {/* TODO: this button is not doing anything */}
        Copy HTML to Clipboard
      </button>
      <button
       onClick={() => setDisplayRenderer(!displayRenderer)}
      >
        {displayRenderer ? 'Hide' : 'View'} Rendered HTML
      </button>

      {displayRenderer && (
        <Renderer
          display={displayRenderer}
          setDisplay={(display) => setDisplayRenderer(display)}
          html={html} />
        )}
    </div>
  );
}

export default App;
