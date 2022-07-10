import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './index.module.scss';

const SourceButton: FC<PropsWithChildren<HTMLAttributes<HTMLButtonElement>>> = (
  props
) => {
  const { children, ...rest } = props;

  return (
    <button className={styles.sourceButton} {...rest}>
      {children}
    </button>
  );
};

export default SourceButton;
