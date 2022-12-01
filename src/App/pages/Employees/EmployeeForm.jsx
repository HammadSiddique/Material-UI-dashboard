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

export default function EmployeeForm() {

  const validate = (fieldValues = values) => {
    let temp = {...errors}
    if ('fullName' in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : 'This field is required'
    if ('email' in fieldValues)
      temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : 'Invalid Email'
    if ('mobile' in fieldValues)
      temp.mobile = fieldValues.mobile.length > 6 ? "" : 'Minimum 7 digits required'
    if ('city' in fieldValues)
      temp.city = fieldValues.city ? "" : 'This field is required'
    if ('departmentId' in fieldValues)    
      temp.departmentId = fieldValues.departmentId != 0 ? "" : 'This field is required'

    setErrors({
      ...temp
    })

    if (fieldValues == values)
      return Object.values(temp).every(x => x == "")
  }

  const {values, setValues, errors, setErrors, handleInputChange, resetForm} = useForm(initialFormValues, true, validate);

  const handleSubmit = (e) =>{
    e.preventDefault()
    if (validate()){
      employeeSerivce.insertEmployees(values)
      resetForm()
  }}

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input name='fullName' label='Full Name' value={values.fullName} onChange={handleInputChange} error={errors.fullName}/>
          <Controls.Input name='email' label='Email' value={values.email} onChange={handleInputChange} error={errors.email}/>
          <Controls.Input name='mobile' label='Mobile Number' value={values.mobile} onChange={handleInputChange} type='number' error={errors.mobile}/>
          <Controls.Input name='city' label='City' value={values.city} onChange={handleInputChange} error={errors.city} />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup label='Gender' name='gender' value={values.gender} onChange={handleInputChange} items={genderItems}/>
          <Controls.Select 
          name='departmentId'
          label='Department'
          value={values.departmentId}
          onChange={handleInputChange}
          options={employeeSerivce.getDeparmentCollection()}
          error={errors.departmentId}
          />
          <Controls.DatePicker label='When was this employee hired?' name='hireDate' value={values.hireDate} onChange={handleInputChange}/>
          <Controls.Checkbox label='Is this an permanent employee?' name='isPermanent' value={values.isPermanent} onChange={handleInputChange}/>
          <div>
            <Controls.Button variant='contained' text='Submit' type='submit'/>
            <Controls.Button variant="outlined" color="secondary" text='Reset' onClick={resetForm}/>
          </div>
          </Grid>
      </Grid>
    </Form>
  )
}
