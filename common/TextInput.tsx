import React from "react";
import { useFormContext } from "react-hook-form";
import {
  Grid,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";

export const TextInput = ({
  label,
  muiProps,
  InputProps,
  required,
  type,
  iName,
  classes,
  disable,
  login,
  maxLength,
  rows,
  multiline,
  size,
  width,
  defaultValue,
  pattern,
  errorMessage,
}: any) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const textField = register(iName, { required, pattern });
  return (
    <>
      <Grid container sx={{ margin: "4px" }}>
        {!login && (
          <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
            <InputLabel className={classes?.label} sx={{ fontSize: "0.9rem" }}>
              {label}
              {required && (
                <span style={{ color: "red", margin: "5px" }}>*</span>
              )}
            </InputLabel>
          </Grid>
        )}
        {login && (
          <InputLabel className={classes?.labelEmail}>
            {label}
            {required && <span style={{ color: "red", margin: "5px" }}>*</span>}
          </InputLabel>
        )}

        <Grid item xs={12} sx={{ alignItems: "center" }}>
          <TextField
            className={classes?.root}
            disabled={disable}
            fullWidth
            {...textField}
            {...muiProps}
            variant="outlined"
            name={iName}
            type={type}
            size={size || "small"}
            defaultValue={defaultValue}
            autoComplete="off"
            color={iName in errors ? "error" : null}
            inputProps={{
              maxLength,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{InputProps}</InputAdornment>
              ),
              style: {
                borderRadius: "15px",
                fontSize: "0.9rem",
              },
              inputProps: { step: "any" },
            }}
            multiline={multiline}
            rows={rows}
            sx={{ width: { width } }}
          />
          <Typography variant="inherit" color="red">
            {iName in errors &&
              (errorMessage ? errorMessage : `Please Enter  ${label} `)}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
