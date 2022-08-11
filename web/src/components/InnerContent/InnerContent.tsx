import React from 'react';
import { Outlet } from 'react-router-dom';

function InnerContent() {
  return (
    <div className="inner-content">
      <Outlet />
    </div>
  );
}

export default InnerContent;
