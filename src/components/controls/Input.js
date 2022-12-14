import React from "react";
import { TextField } from "@material-ui/core";

export default function Input(props) {
  const {
    name,
    label,
    value,
    onChange,
    error = null,
    type = "default",
  } = props;

  return (
    <TextField
      variant="outlined"
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      {...(error && { error: true, helperText: error })}
    />
  );
}
