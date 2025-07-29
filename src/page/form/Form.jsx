import { Alert, Box, Button, Snackbar, Stack, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manger",
    label: "Manger",
  },
  {
    value: "User",
    label: "User",
  },
];

export default function Form() {
  const [open, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = () => {
    console.log("doneeeeeeeeeeee");

    handleClick();
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      noValidate
      autoComplete="off"
    >
      <Stack direction={"row"} sx={{ gap: 2 }}>
        <TextField
          {...register("firstName", { required: true, minLength: 3 })}
          helperText={errors.firstName ? "This field is required" : null}
          error={Boolean(errors.firstName)}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={
            errors.lastName ? "This field is required & min 3 character" : null
          }
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        error={Boolean(errors.email)}
        helperText={
          errors.email ? "Please provide a valid email address" : null
        }
        {...register("email", {
          required: true,
          minLength: 3,
          pattern: regEmail,
        })}
        label="Email"
        variant="filled"
      />

      <TextField
        error={Boolean(errors.Contactnumber)}
        helperText={
          errors.Contactnumber ? "Please provide a valid Contact phone" : null
        }
        {...register("Contactnumber", {
          required: true,
          minLength: 3,
          pattern: phoneRegExp,
        })}
        label="Contact Number"
        variant="filled"
      />

      <TextField label="Adress1" variant="filled" />
      <TextField label="Adress2" variant="filled" />
      <TextField
        variant="filled"
        id="standard-select-currency-native"
        select
        label="Role"
        defaultValue="User"
        slotProps={{
          select: {
            native: true,
          },
        }}
      >
        {data.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create new User
        </Button>

        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}>
          <Alert
            onClose={handleClose}
            severity="info"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Account created successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
