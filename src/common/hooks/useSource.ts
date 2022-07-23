import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
import { source } from '@/sources/index';
import { IRMInfo } from '@/types';
import { concatUrlQuery } from '@/utils';
import { BASE_B_URL } from '@/app/config';

export const CURRENT_SOURCE_KEY = 'X_CURRENT_SOURCE';

export type StorageSource = {
  info: IRMInfo;
  index: number;
};

const defaultValue: StorageSource = {
  info: source[0],
  index: 0
};

export const useSource = (): [
  StorageSource,
  Dispatch<SetStateAction<StorageSource>>,
  string
] => {
  const [current, setCurrent] = useState<StorageSource>(
    JSON.parse(localStorage.getItem(CURRENT_SOURCE_KEY) || 'null') ||
      defaultValue
  );

  const currentUrl = useMemo(() => {
    const { info, index } = current;
    return concatUrlQuery(BASE_B_URL, info.sources[index]);
  }, [current]);

  useEffect(() => {
    localStorage.setItem(CURRENT_SOURCE_KEY, JSON.stringify(current));
  }, [current]);

  return [current, setCurrent, currentUrl];
};
