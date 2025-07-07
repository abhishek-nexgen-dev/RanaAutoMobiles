import React, { forwardRef } from 'react';

const CircleWrapper = forwardRef(function CircleWrapper(
  { children, className = '', ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#181818] shadow-lg flex items-center justify-center z-50 ${className}`}
      style={{
        width: '300px',
        height: '300px',
      }}
      {...props}
    >
      {children}
    </div>
  );
});

export { CircleWrapper as default, CircleWrapper };
