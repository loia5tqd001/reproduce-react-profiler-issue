import React, { Suspense } from 'react';
import { Spin } from 'antd';
import ErrorBoundary from './ErrorBoundary';

const FallbackComponent = ({ height }) => {
  return (
    <div style={{ height, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Spin size="large" />
    </div>
  );
};

const WithRecoilFetching = (WrappedComponent, height) => {
  return (props) => (
    <ErrorBoundary fallback={<FallbackComponent height={height} />}>
      <Suspense fallback={<FallbackComponent height={height} />}>
        <WrappedComponent {...props} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default WithRecoilFetching;
