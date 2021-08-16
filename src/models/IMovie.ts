export interface IMovie {
  id: number;
  moviename: string;
  moviethumbnail: string;
  link: string;
}
export interface ListResponse<T> {
  data: T[];
}
