"use client";
import { useMemo } from "react";
import { useTable } from "react-table";
import styles from "./Table.module.css";

import dataMap from "./data";

export default function Table() {
  const data = useMemo(() => dataMap, []);
  const columns = useMemo(() => {
    return [
      {
        Header: "Artist",
        accessor: "artist",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Catalog Number",
        accessor: "catalogueNumber",
      },
      {
        Header: "Year",
        accessor: "year",
      },
    ];
  }, []);

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()} className={styles.table}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className={styles.header}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className={styles.row}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} className={styles.cell}>
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
