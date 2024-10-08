import React from 'react';

function Story({ story }) {
  return (
    <div className="story">
      <h2>Current Story</h2>
      {story.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}

export default Story;
