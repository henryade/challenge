import { ArrowDownLogo, ArrowUpLogo } from 'assets'
import { ITable } from 'interfaces'
import React, { FC, useEffect, useState } from 'react'
import { useTable, useSortBy } from 'react-table'
import { DefaultInput } from './Input'
import useViewport from 'hooks/useViewPort'

const Table: FC<ITable> = ({ columns, data }) => {
  const { currentScreenSize } = useViewport();
  const [hiddenFields, setHiddenFields] = useState([""])

  useEffect(() => {
    if (currentScreenSize.width < 1080 && currentScreenSize.width > 768) {
      setHiddenFields(['Users', 'Status', "Date", ""])
    } else if (currentScreenSize.width <= 768) {
      setHiddenFields(['Users', 'Status', "Date", ""])
    } else {
      setHiddenFields([])
    }

  }, [currentScreenSize.width])
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        hiddenColumns: hiddenFields
      }
    },
    useSortBy,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: () => (
            <div>
              <input type='checkbox' />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <input type='checkbox' />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )
  return (
    <table className='table-auto w-full shadow-table rounded-lg border border-gray-200' {...getTableProps()}>
      <thead className='rounded-t-lg'>
        {headerGroups.map(headerGroup => (
          <tr className='rounded-t-lg bg-gray-50' {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => {
              return (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th className='bg-gray-50 border-b border-t text-left first:text-right border-gray-200 first:rounded-tl-lg text-gray-500 text-xs' {...(column.Header === "Invoice" ? column.getHeaderProps(column.getSortByToggleProps()) : {})}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.Header === "Invoice" && (column.isSorted
                      ? column.isSortedDesc
                        ? <ArrowDownLogo className='inline' />
                        : <ArrowUpLogo className='inline' />
                      : <ArrowDownLogo className='inline' />)}
                  </span>
                </th>
              )
            })}
          </tr>
        ))}
      </thead>
      <tbody className='rounded-b-lg bg-white' {...getTableBodyProps()}>
        {rows.map(
          (row) => {
            prepareRow(row);
            return (
              <tr className='border-b border-gray-200' {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td className='text-left first:text-right relative' {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  )
                })}
              </tr>
            )
          }
        )}
      </tbody>
    </table>
  )
}

export default Table