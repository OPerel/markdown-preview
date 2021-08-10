import React from 'react';

interface PreviewerProps {
  html: string
}
const Previewer: React.FC<PreviewerProps> = ({ html }) => {
  return (
    <section>
      <pre>
        <code>
          {html}
        </code>
      </pre>
    </section>
  );
};

export default Previewer;