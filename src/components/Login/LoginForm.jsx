import {
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import logo from "../../images/login-logo.svg";
import OrangeButton from "../Button/OrangeButton";
import { useNewsContext } from "../../context/NewsContext";

const LoginForm = () => {
  const {
    userNameError,
    passwordError,
    isLoginInProgress,
    handleSubmit,
    errorMessage,
    userName,
    password,
    setUserName,
    setPassword,
  } = useNewsContext();

  return (
    <Grid style={gridStyle}>
      <img src={logo} style={styledImage} />
      <Paper style={paperStyle}>
        <Typography variant="h5" style={styleTextPrimary}>
          Welcome Back
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          style={styleTextSecondary}
        >
          Please sign in to access your account
        </Typography>
        <Stack sx={{ height: "250px" }}>
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              username="username"
              id="username"
              size="small"
              fullWidth
              label="Username"
              variant="outlined"
              margin="normal"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              InputLabelProps={{
                shrink: true,
              }}
              error={userNameError}
              helperText={userNameError ? "Username is required" : ""}
            />
          </form>

          <form onSubmit={handleSubmit}>
            <TextField
              type="password"
              password="password"
              size="small"
              fullWidth
              label="Password"
              variant="outlined"
              margin="normal"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              InputLabelProps={{
                shrink: true,
              }}
              error={passwordError}
              helperText={passwordError ? "Password is required" : ""}
            />
          </form>

          {isLoginInProgress ? (
            <CircularProgress
              size={30}
              sx={{
                margin: "20px auto",
              }}
            />
          ) : (
            <>
              <OrangeButton
                type="submit"
                text={"Sign In"}
                onClick={handleSubmit}
                sx={{ display: isLoginInProgress ? "none " : "block" }}
                fullWidth
              />
              {errorMessage && !isLoginInProgress && (
                <Alert severity="error">{errorMessage}</Alert>
              )}
            </>
          )}
        </Stack>
      </Paper>
    </Grid>
  );
};

const gridStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const paperStyle = {
  display: "flex",
  alignItems: "stretch",
  justifyContent: "center",
  flexDirection: "column",
  padding: "20px 40px",
  maxHeight: "440px",
  height: "100%",
  maxWidth: "400px",
  width: "100%",
  margin: "40px auto 100px",
  borderRadius: "5px",
  boxShadow: "0px 4px 21px rgba(148, 148, 148, 0.25)",
};

const styleTextPrimary = {
  fontWeight: "500",
};

const styleTextSecondary = {
  marginBottom: "30px",
};

const styledButton = {
  margin: "20px 0",
};

const styledImage = {
  width: "130px",
};

export default LoginForm;
