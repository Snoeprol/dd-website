import React from 'react';

const FullScreenForm = ({ children }) => {
  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form style={{ width: '50%' }}>
        {children}
      </form>
    </div>
  );
};

export default FullScreenForm;