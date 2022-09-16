export type UrlQuery = Record<string, string | undefined>;

export type UrlPartValues = {
  auth?: string;
  hash?: string;
  host?: string;
  hostname?: string;
  href?: string;
  origin?: string;
  password?: string;
  pathname?: string;
  port?: string;
  protocol?: string;
  query?: UrlQuery;
  slashes?: boolean;
  username?: string;
};
