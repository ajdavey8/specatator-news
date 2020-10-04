export type RequestResponse<T> =
  | {
    ok: true;
    data: T;
  }
  | {
    ok: false;
    data: null;
    error: string;
  };

export interface Article {
  id: number,
  title: string,
  image: string
  author: string,
  bookmarked?: boolean
}
