import TableBody from "../TableBody";
import React from "react";
import { ITableBodyItems, ITableHeaderItems } from "../../Interfaces/common";
import TableHeader from "../TableHeader";

interface AlbumRepoTableProps {
  headerClassname?: string;
  showTableHeader?: boolean;
  dataClassname?: string;
  headerList: ITableHeaderItems[];
  dataList: ITableBodyItems[];
}

function AlbumRepoTable(props: AlbumRepoTableProps) {
  return (
    <div>
      {props.showTableHeader && (
        <TableHeader
          items={props.headerList}
          className={props.headerClassname}
        />
      )}
      <TableBody items={props.dataList} className={props.dataClassname} />
    </div>
  );
}

export default AlbumRepoTable;
