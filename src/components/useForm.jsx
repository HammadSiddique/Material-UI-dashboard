import React, {useState} from 'react'
import { makeStyles } from '@material-ui/styles';

export function useForm(initialFormValues) {

  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({})

  const handleInputChange = e => {
    const {name, value} = e.target
    setValues({
      ...values,
      [name]:value
    })
  }

  return {
    values, 
    setValues,
    errors,
    setErrors,
    handleInputChange
  }
}

const useStyles = makeStyles(theme => ({
  root:{
    '& .MuiFormControl-root':{
      width: '80%',
      margin: theme.spacing(1)
    }
  }
}))


export function Form(props) {

  const classes = useStyles();

  const {children, ...others} = props

  return (
    <form className={classes.root} autoComplete='off' {...others}>
      {props.children}
    </form>
  )
}
