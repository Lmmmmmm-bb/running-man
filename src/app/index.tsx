import { FC, useEffect, useState } from 'react';
import SourceCard from '@/components/source-card';
import { source } from '@/sources';
import { IRMSource } from '@/types';
import { concatUrlQuery } from '@/utils';
import styles from './index.module.scss';
import { BASE_B_URL, CURRENT_KEY } from './config';

const App: FC = () => {
  const [currentSource, setCurrentSource] = useState(
    localStorage.getItem(CURRENT_KEY) || ''
  );

  const handleSourceChange = (source: IRMSource) => {
    const next = concatUrlQuery(BASE_B_URL, source);
    setCurrentSource(next);
  };

  useEffect(() => {
    const current = localStorage.getItem(CURRENT_KEY);
    if (!current) {
      const [first] = source;
      const url = concatUrlQuery(BASE_B_URL, first.sources[0]);
      setCurrentSource(url);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CURRENT_KEY, currentSource);
  }, [currentSource]);

  return (
    <div className={styles.wrapper}>
      <iframe className={styles.video} src={currentSource} allowFullScreen />
      <div className={styles.selector}>
        {source.map((item) => (
          <SourceCard
            key={item.date}
            info={item}
            onSourceChange={handleSourceChange}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
