import { FC, useEffect } from 'react';
import SourceCard from '@/components/source-card';
import { source } from '@/sources';
import { IRMInfo } from '@/types';
import { useSource } from '@/common/hooks';
import cardStyles from '@/components/source-card/index.module.scss';
import styles from './index.module.scss';

const App: FC = () => {
  const [currentSource, setCurrentSource, currentUrl] = useSource();

  const handleSourceChange = (info: IRMInfo, index: number) => {
    setCurrentSource({ info, index });
  };

  useEffect(() => {
    const el = document.querySelector(`.${cardStyles.selected}`);
    el && el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  return (
    <div className={styles.wrapper}>
      <iframe className={styles.video} src={currentUrl} allowFullScreen />
      <div className={styles.selector}>
        {source.map((item) => (
          <SourceCard
            key={item.date}
            info={item}
            onSourceChange={handleSourceChange}
            selected={currentSource.info.episode === item.episode}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
