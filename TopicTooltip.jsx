import React, { useState } from 'react';

export default function TopicTooltip({ topic, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="tooltip-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{topic}</span>
      {isHovered && (
        <div className="tooltip">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}
