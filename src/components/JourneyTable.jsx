import React, { useEffect, useMemo, useRef, useCallback } from "react";
import { useStore } from "../store/useStore";
import { useTable, usePagination, useSortBy } from "react-table";

function Table({
  columns,
  data,
  pageCount: controlledPageCount,
  loading,
  fetchData,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    // Get the state from the instance
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      manualPagination: true,
      pageCount: controlledPageCount,
    },
    useSortBy,
    usePagination
  );

  const firstPageRows = rows.slice(0, 30);

  useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  return (
    <>
      <table {...getTableProps()}>
        {/* TABLE HEAD */}
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/*TABLE BODY */}
        <tbody {...getTableBodyProps}>
          {firstPageRows.map((row, id) => {
            prepareRow(row);
            // TABLE ROW
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
          <tr>
            {loading ? (
              // Use our custom loading state to show a loading indicator
              <td colSpan="10000">Loading...</td>
            ) : (
              <td colSpan="10000">
                Showing the first 20 of {page.length} results of ~
                {controlledPageCount * pageSize} results
              </td>
            )}
          </tr>
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[30, 60, 90, 120, 200].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

const JourneyTable = () => {
  const filter = useStore((state) => state.filter);
  const journey = useStore((state) => state.journey);
  const pageCount = useStore((state) => state.pageCount);
  const loading = useStore((state) => state.loading);
  const { setJourney, setLoading, setPageCount } = useStore();
  const fetchIdRef = useRef(0);

  const fetchData = useCallback(({ pageSize, pageIndex }) => {
    // Give this fetch an ID
    const fetchId = ++fetchIdRef.current;
    // Set the loading state
    setLoading(true);

    // We'll even set a delay to simulate a server here
    setTimeout(() => {
      // Only update the data if this is the latest fetch
      if (fetchId === fetchIdRef.current) {
        const startRow = pageSize * pageIndex;
        const endRow = startRow + pageSize;
        setJourney(journey.slice(startRow, endRow));

        // Your server could send back total page count.
        // For now we'll just fake it, too
        setPageCount(Math.ceil(journey.length / pageSize));

        setLoading(false);
      }
    }, 1000);
  }, []);

  // COLUMNS
  const columns = useMemo(
    () => [
      {
        Header: "Departure",
        accessor: "Departure_station_name",
      },
      {
        Header: "Return",
        accessor: "Return_station_name",
      },
      {
        Header: "Distance(km)",
        accessor: "Covered_distance",
      },
      {
        Header: "Duration(m)",
        accessor: "Duration",
      },
    ],
    []
  );

  const data = useMemo(() => [...journey], [journey]);

  return (
    <Table
      columns={columns}
      data={data}
      pageCount={pageCount}
      loading={loading}
      fetchData={fetchData}
    />
  );
};

export default JourneyTable;
