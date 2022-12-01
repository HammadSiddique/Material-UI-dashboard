import React, {useState} from 'react'
import PageHeader from '../../../components/PageHeader'
import EmployeeForm from './EmployeeForm'
import { Person } from '@material-ui/icons'
import { makeStyles, Paper, TableBody, TableCell, TableRow } from '@material-ui/core'
import useTable from '../../../components/useTable'
import { getAllEmployees } from '../../../services/employeeService'

const useStyles = makeStyles(theme => ({
  pageContent:{
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  }
}))

export default function Employees() {

  const classes = useStyles();

  const [records, setRecords] = useState(getAllEmployees)
  const {TblContainer} = useTable();

  return (
    <>
    <PageHeader title='Employees Data' subTitle='Find all employees details here' icon={<Person fontSize='large' />}/>
    <Paper className={classes.pageContent}>
      <EmployeeForm />
      <TblContainer>
        <TableBody>
          {
            records.map(employee => (
              <TableRow key={employee.id}>
                <TableCell>{employee.fullName}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.mobile}</TableCell>
                <TableCell>{employee.department}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </TblContainer>
    </Paper>
    </>
  )
}
