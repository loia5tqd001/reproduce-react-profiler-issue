// reference from: https://github.com/ZhangMYihua/lesson-28/blob/1f3e531fc82d6ea8d8379a1db47875dcf688e1e2/src/components/with-spinner/with-spinner.component.jsx
// Learn more in this repo: https://github.com/loia5tqd001/Phonee/blob/master/src/components/atoms/with-spinner.comp.jsx
import React from 'react';
import { Skeleton, Spin } from 'antd';

const flexCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const WithSpinner = (WrappedComponent, height) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div style={flexCenter}>
        {height && <Spin size={height > 100 ? 'large' : 'default'} />}
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export const WithSkeleton = (WrappedComponent, height) => {
  const MahSkeleton = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div style={flexCenter}>
        {height && <Skeleton paragraph={{ rows: height / 50 }} active />}
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return MahSkeleton;
};

export default WithSpinner;
