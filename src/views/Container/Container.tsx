import React from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = (props) => {
  const { children, className } = props;
  return className ? (
    <div className={`${styles.container} ${className}`}>{children}</div>
  ) : (
    <div className={styles.container}>{children}</div>
  );
};

export default Container;
