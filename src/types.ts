export interface IRMInfo {
  date: string;
  title: string;
  episode: number;
  guests: string[];
  sources: IRMSource[];
}

export interface IRMSource {
  page: number;
  bvid: string;
}
