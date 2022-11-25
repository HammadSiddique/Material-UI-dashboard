import React from 'react'
import PageHeader from '../../../components/PageHeader'
import EmployeeForm from './EmployeeForm'
import { Person } from '@material-ui/icons'
import { makeStyles, Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  pageContent:{
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  }
}))

export default function Employees() {

  const classes = useStyles();

  return (
    <>
    <PageHeader title='Employees Data' subTitle='Find all employees details here' icon={<Person fontSize='large' />}/>
    <Paper className={classes.pageContent}>
      <EmployeeForm />
    </Paper>
    </>
  )
}
