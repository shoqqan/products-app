import React, { ReactNode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export function withRouter(component: () => ReactNode) {
  return function () {
    return (
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>{component()}</Suspense>
      </BrowserRouter>
    );
  };
}
