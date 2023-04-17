import React, { useReducer, useMemo } from "react";
import { useStore } from "../store/useStore";
import {
  getCoreRowModel,
  flexRender,
  createColumnHelper,
  useReactTable,
} from "@tanstack/react-table";

const columnHelper = createColumnHelper();

// COLUMNS
const columns = [
  columnHelper.accessor("Departure_station_name", {
    cell: (info) => info.getValue(),
    header: () => <span>Departure</span>,
  }),
  columnHelper.accessor((row) => row.Return_station_name, {
    id: "return",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Return</span>,
  }),
  columnHelper.accessor("Covered_distance", {
    header: () => "Distance(km)",
    cell: (info) => (info.renderValue() / 1000).toFixed(2),
  }),
  columnHelper.accessor("Duration", {
    header: () => <span>Duration(m)</span>,
    cell: (info) => (info.renderValue() / 60).toFixed(2),
  }),
];

const JourneyTable = () => {
  const filter = useStore((state) => state.filter);
  const journey = useStore((state) => state.journey);
  const pagination = useStore((state) => state.pagination);
  const { pageIndex = 0, pageSize = 10 } = pagination;

  const fetchDataOptions = {
    pageIndex,
    pageSize,
  };
  const rerender = useReducer(() => ({}, {}))[1];
  const defaultData = React.useMemo(() => [], []);
  const paginationProps = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const table = useReactTable({
    data: journey ?? defaultData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JourneyTable;
