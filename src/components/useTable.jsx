import { Table, TableHead } from '@material-ui/core'
import React from 'react'

export default function useTable(records, headCells) {

  const TblContainer = props => (
    <Table>
      {props.children}
    </Table>
  )

  const TblHead = props => (
    <TableHead>

    </TableHead>
  )

  return {
    TblContainer,
    TblHead
  }
}
