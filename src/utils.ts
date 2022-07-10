import { IRMSource } from './types';

export function concatUrlQuery(url: string, query: IRMSource) {
  const queryStr = Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return `${url}?${queryStr}&high_quality=1`;
}
