"use client";
import { useCallback, useMemo } from "react";
import { useTable, useSortBy } from "react-table";
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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <table {...getTableProps()} className={styles.table}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              const { key, ...rest } = column.getHeaderProps(
                column.getSortByToggleProps()
              );
              return (
                <th key={key} {...rest} className={styles.header}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "-" : "+") : ""}
                  </span>
                </th>
              );
            })}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          const { key, ...rest } = row.getRowProps();

          return (
            <tr key={key} {...rest} className={styles.row}>
              {row.cells.map((cell) => {
                const { key, ...rest } = cell.getCellProps();

                return (
                  <td key={key} {...rest} className={styles.cell}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
