import React from 'react';

interface RendererProps {
  display: boolean,
  setDisplay(display: boolean): void,
  html: string
}

const Renderer: React.FC<RendererProps> = ({ display, setDisplay, html }) => {
  return display ? (
    <>
      <div
        className="renderer"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <p className="close" onClick={() => setDisplay(false)}>X</p>
    </>
  ) : null;
};

export default Renderer;