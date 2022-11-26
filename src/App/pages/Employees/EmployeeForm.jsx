import { Grid } from '@material-ui/core';
import React from 'react';
import {useForm, Form} from '../../../components/useForm';
import Controls from '../../../components/controls/Controls';
import * as employeeSerivce from '../../../services/employeeService';

const genderItems = [
  {id: 'male', title: 'Male'},
  {id: 'female', title: 'Female'},
  {id: 'other', title: 'Other'},
]

const initialFormValues = {
  id: 0,
  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  hireDate: new Date(),
  isPermanent: false,
}

export default function EmployeesForm() {

  const {values, setValues, handleInputChange} = useForm(initialFormValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input name='fullName' label='Full Name' value={values.fullName} onChange={handleInputChange} />
          <Controls.Input name='email' label='Email' value={values.email} onChange={handleInputChange} />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup label='Gender' name='gender' value={values.gender} onChange={handleInputChange} items={genderItems}/>
          <Controls.Select 
          name='departmentId'
          label='Department'
          value={values.departmentId}
          onChange={handleInputChange}
          options={employeeSerivce.getDeparmentCollection()}
          />
          <Controls.DatePicker label='When was this employee hired?' name='hireDate' value={values.hireDate} onChange={handleInputChange}/>
          <Controls.Checkbox label='Is this an permanent employee?' name='isPermanent' value={values.isPermanent} onChange={handleInputChange}/>
          </Grid>
      </Grid>
    </Form>
  )
}
