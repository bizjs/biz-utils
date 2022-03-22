export type UrlQuery = Record<string, string | undefined>;

export type OpenUrlOptions = {
  query?: UrlQuery;
  newWindow?: boolean;
};
