import { useState } from "react";
import { Button, TextField, Link, Divider, Stack } from "@mui/material";
//import CloseIcon from "@mui/icons-material/Close";
//import { signInWithEmailAndPassword } from "firebase/auth";
//import { auth } from "../../utils/firebase";
//import { registerUser } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "../../state/authorization/authSlice";

const Login = () => {
  const data = useSelector((state) => state.authUser);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [register, setRegister] = useState(true);

  // console.log(data.value.email);

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

  // const [emailError, setEmailError] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);
  // const [firstError, setFirstError] = useState(false);
  // const [lastError, setLastError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    // setEmailError(false);
    // setPasswordError(false);
    // setFirstError(false);
    // setLastError(false);
    // if (register) {
    //   if (first === "") {
    //     setEmailError(true);
    //   }
    //   if (last === "") {
    //     setPasswordError(true);
    //   }
    // }
    // if (email === "") {
    //   setEmailError(true);
    // }
    // if (password === "") {
    //   setPasswordError(true);
    // }
    // if (register) {
    //   if (email && password && first && last) {
    //     const formData = {
    //       first: first,
    //       last: last,
    //       email: email,
    //       password: email,
    //     };
    //     dispatch(registerUser(formData));
    //     //        console.log(first, last, email, password);
    //   }
    // } else {
    //   if (email && password) {
    //     // await signInWithEmailAndPassword(auth, email, password)
    //     //   .then((response) => {
    //     //     console.log("Email Verified:", response.user.emailVerified);
    //     //     setSnackMessage("Successfully Logged In");
    //     //     setOpenSnack(true);
    //     //   })
    //     //   .catch((error) => {
    //     //     // https://firebase.google.com/docs/reference/js/auth
    //     //     // readonly INVALID_LOGIN_CREDENTIALS: "auth/invalid-credential";
    //     //     const errorCode = error.code;
    //     //     //        const errorMessage = error.message;
    //     //     //        console.log(errorCode, errorMessage);
    //     //     setSnackMessage(errorCode);
    //     //     setOpenSnack(true);
    //     //   });
    //     const formData = {
    //       email: email,
    //       password: password,
    //     };
    //     dispatch(loginUser(formData));
    //     //        console.log(email, password);
    //   }
    // }
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
