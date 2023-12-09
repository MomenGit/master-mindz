import { Stack, TextField, Button } from '@mui/material';

export default function LoginForm() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField fullWidth id="username" label="Username" variant="outlined" />
      <TextField fullWidth id="password" label="Password" variant="outlined" />
      <Button fullWidth variant="contained">
        SIGN IN
      </Button>
      <Stack direction="row">
        <Button variant="text">Forgot Password?</Button>
        <Button variant="text">{"Don't have an account? Sign Up"}</Button>
      </Stack>
      <Button fullWidth variant="contained">
        Contained
      </Button>
    </Stack>
  );
}
