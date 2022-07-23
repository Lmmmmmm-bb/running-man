import { FC } from 'react';
import { IRMInfo } from '@/types';
import EpisodeTag from '../episode-tag';
import SourceButton from '../source-button';
import styles from './index.module.scss';

interface ISourceCardProps {
  info: IRMInfo;
  selected: boolean;
  onSourceChange: (current: IRMInfo, index: number) => void;
}

const SourceCard: FC<ISourceCardProps> = (props) => {
  const { info, selected, onSourceChange } = props;

  return (
    <div className={`${styles.wrapper} ${selected && styles.selected}`}>
      <h3 className={styles.title}>
        <EpisodeTag episode={info.episode} />
        <span style={{ marginLeft: 8 }}>{info.title}</span>
      </h3>
      <p className={styles.date}>{info.date}</p>
      {info.guests && (
        <div className={styles.guestWrapper}>
          {info.guests.map((guest) => (
            <span className={styles.guest} key={guest}>
              {guest}
            </span>
          ))}
        </div>
      )}
      <div>
        {info.sources.map((source, index) => (
          <SourceButton
            key={`${source.bvid}&${source.page}`}
            onClick={() => onSourceChange(info, index)}
          >
            {`源 ${index + 1}`}
          </SourceButton>
        ))}
      </div>
    </div>
  );
};

export default SourceCard;
