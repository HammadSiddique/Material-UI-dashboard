import React from 'react'
import PageHeader from '../../../components/PageHeader'
import EmployeesForm from './EmployeesForm'
import { Person } from '@material-ui/icons'

export default function Employees() {
  return (
    <>
    <PageHeader title='Employees Data' subTitle='Find all employees details here' icon={<Person fontSize='large' />}/>
    <EmployeesForm />
    </>
  )
}
