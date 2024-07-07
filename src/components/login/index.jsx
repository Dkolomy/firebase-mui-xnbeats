import { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Link,
  Divider,
  Stack,
  Snackbar,
  IconButton,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

//import CloseIcon from "@mui/icons-material/Close";
//import { signInWithEmailAndPassword } from "firebase/auth";
//import { auth } from "../../utils/firebase";
//import { registerUser } from "../../store/actions";
import { useDispatch, useSelector, useStore } from "react-redux";
import {
  registerUser,
  loginUser,
  autoSignIn,
} from "../../state/authorization/authSlice";
import { useNavigate } from "react-router-dom";
import * as api from "../../api";

const Login = () => {
  const currState = useSelector((state) => state.authUser);

  const dispatch = useDispatch();
  const navigation = useNavigate();

  //  dispatch(autoSignIn());
  //  const st = useStore();
  //  console.log(st.getState())

  const [loading, setLoading] = useState(false);
  const [register, setRegister] = useState(true);

  const [userData, setUserData] = useState({
    email: "francis@gmail.com",
    password: "test1234",
    first: "francis",
    last: "jones",
  });

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    setRegister(!register);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    let formData;
    if (register) {
      formData = {
        email: userData.email,
        password: userData.password,
        first: userData.first,
        last: userData.last,
      };
      api
        .registerUser(formData)
        .then((result) => {
          dispatch(registerUser(result));
          handleRedirection();
        })
        .catch((err) => console.log(err));
    } else {
      formData = {
        email: userData.email,
        password: userData.password,
      };
      api
        .loginUser(formData)
        .then((result) => {
          dispatch(loginUser(result));
          handleRedirection();
        })
        .catch((err) => console.log(err));
    }
  };

  const handleRedirection = () => {
    setLoading(false);
    if (currState.isAuth) {
      // handleSubmit(action + " successful", "success")
      // setSeverity("success");
      // setMessage(action + " successful");
      // setOpen(true);
      navigation("/");
    } else {
      // handleSubmit(action + " failed: " + currState.errorCode, "error")
      // setSeverity("error");
      // setMessage(action + " failed: " + currState.errorCode);
      // setOpen(true);
      navigation("/login");
    }
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>{register ? "Register" : "Login"} Form</h2>
        {register && (
          <>
            <TextField
              placeholder="First Name"
              onChange={handleInput}
              name="first"
              required
              variant="outlined"
              color="secondary"
              type="text"
              sx={{ mb: 3 }}
              fullWidth
              value={userData.first}
              // error={firstError}
              size="small"
            />
            <TextField
              placeholder="Last Name"
              onChange={handleInput}
              name="last"
              required
              variant="outlined"
              color="secondary"
              type="text"
              sx={{ mb: 3 }}
              fullWidth
              value={userData.last}
              // error={lastError}
              size="small"
            />
          </>
        )}
        <TextField
          placeholder="Email"
          onChange={handleInput}
          name="email"
          required
          variant="outlined"
          color="secondary"
          type="email"
          sx={{ mb: 3 }}
          fullWidth
          value={userData.email}
          // error={emailError}
          size="small"
        />
        <TextField
          label="Password"
          onChange={handleInput}
          name="password"
          required
          variant="outlined"
          color="secondary"
          type="password"
          sx={{ mb: 3 }}
          fullWidth
          value={userData.password}
          // error={passwordError}
          size="small"
        />
        <Stack direction="row" spacing={1}>
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            type="submit"
          >
            {register ? "Register" : "Login"}
          </Button>
          <Divider orientation="vertical" />
          <Link size="small" component="button" onClick={handleRegister}>
            {register ? "Have an account? Login" : "Need an account? Register"}
          </Link>
        </Stack>
      </form>
    </>
  );
};

export default Login;
