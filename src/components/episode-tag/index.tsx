import { FC } from 'react';
import styles from './index.module.scss';

interface IEpisodeTagProps {
  episode: number;
}

const EpisodeTag: FC<IEpisodeTagProps> = (props) => {
  const { episode } = props;

  return (
    <span className={styles.wrapper}>
      E{episode.toString().padStart(3, '0')}
    </span>
  );
};

export default EpisodeTag;
