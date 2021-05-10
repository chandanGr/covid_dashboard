export interface ITableBodyItems {
  key: string;
  [columnName: string]: string | JSX.Element;
}

export interface ITableHeaderItems {
  heading: string;
  key: string;
}
