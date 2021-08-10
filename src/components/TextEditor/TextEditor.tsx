import React from 'react';

interface EditorProps {
  text: string,
  setText(text: string): void,
}

const TextEditor: React.FC<EditorProps> = ({ text, setText }) => {
  return (
    <section>
      <textarea
        name="markdown-editor"
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </section>
  );
};

export default TextEditor;