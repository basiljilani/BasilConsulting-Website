import React from 'react';

export function CheckeredBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f3f4f6 1px, transparent 1px),
            linear-gradient(to bottom, #f3f4f6 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.5
        }}
      />
    </div>
  );
}