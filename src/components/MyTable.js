import React from 'react'

import { makeStyles, Table } from '@material-ui/core'
import { useSortBy, useTable } from 'react-table'
import { connect } from 'react-redux'


import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';




const useStyles = makeStyles({
  table: {
    maxWidth: 650,
    '&:hover th': {
      color: 'red'
    },
    '& th': {
      fontWeight: 900,
      fontSize: 18
    }
  },
});

function MyTable({ data }) {
  const classes = useStyles();


  const columns = React.useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id', // accessor is the "key" in the data
      },
      {
        Header: 'Titulek',
        accessor: 'title'
      },
      {
        Header: 'Autor',
        accessor: 'author',
      },
    ],
    []
  )

  const tableInstance = useTable({ columns, data }, useSortBy)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance


  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table {...getTableProps()}>
        <TableHead >
          {
            headerGroups.map(headerGroup => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {
                  headerGroup.headers.map(column => (
                    <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render('Header')}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                          : ''}
                      </span>
                    </TableCell>
                  ))
                }
              </TableRow>
            ))
          }
        </TableHead>

        <TableBody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);

            return (
              <TableRow {...row.getRowProps()}>
                {
                  row.cells.map(cell => (
                    <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                  ))
                }
              </TableRow>
            )
          })}

        </TableBody>
      </Table>
    </TableContainer>
  )
}


export default MyTable;