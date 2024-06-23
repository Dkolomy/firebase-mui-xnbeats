import { useState } from "react";
import { Button, TextField, Link, Divider, Stack } from "@mui/material";
//import CloseIcon from "@mui/icons-material/Close";
//import { signInWithEmailAndPassword } from "firebase/auth";
//import { auth } from "../../utils/firebase";
//import { registerUser } from "../../store/actions";
import { useDispatch } from "react-redux";
import { registerUser, loginUser } from "../../store/reducers/auth";

const Login = () => {
  const [email, setEmail] = useState("francis@gmail.com");
  const [password, setPassword] = useState("test1234");
  const [first, setFirst] = useState("francis");
  const [last, setLast] = useState("jones");

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [firstError, setFirstError] = useState(false);
  const [lastError, setLastError] = useState(false);

  const [loading, setLoading] = useState(false);
  const [register, setRegister] = useState(true);

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    setEmailError(false);
    setPasswordError(false);
    setFirstError(false);
    setLastError(false);

    if (register) {
      if (first === "") {
        setEmailError(true);
      }
      if (last === "") {
        setPasswordError(true);
      }
    }

    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }

    if (register) {
      if (email && password && first && last) {
        const formData = {
          first: first,
          last: last,
          email: email,
          password: email,
        };
        dispatch(registerUser(formData));
        //        console.log(first, last, email, password);
      }
    } else {
      if (email && password) {
        // await signInWithEmailAndPassword(auth, email, password)
        //   .then((response) => {
        //     console.log("Email Verified:", response.user.emailVerified);
        //     setSnackMessage("Successfully Logged In");
        //     setOpenSnack(true);
        //   })
        //   .catch((error) => {
        //     // https://firebase.google.com/docs/reference/js/auth
        //     // readonly INVALID_LOGIN_CREDENTIALS: "auth/invalid-credential";
        //     const errorCode = error.code;
        //     //        const errorMessage = error.message;
        //     //        console.log(errorCode, errorMessage);
        //     setSnackMessage(errorCode);
        //     setOpenSnack(true);
        //   });

        const formData = {
          email: email,
          password: password,
        };
        dispatch(loginUser(formData));
        //        console.log(email, password);
      }
    }
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>{register ? "Register" : "Login"} Form</h2>
        {register && (
          <>
            <TextField
              label="First Name"
              onChange={(e) => setFirst(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="text"
              sx={{ mb: 3 }}
              fullWidth
              value={first}
              error={firstError}
              size="small"
            />
            <TextField
              label="Last Name"
              onChange={(e) => setLast(e.target.value)}
              required
              variant="outlined"
              color="secondary"
              type="text"
              sx={{ mb: 3 }}
              fullWidth
              value={last}
              error={lastError}
              size="small"
            />
          </>
        )}
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="email"
          sx={{ mb: 3 }}
          fullWidth
          value={email}
          error={emailError}
          size="small"
        />
        <TextField
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="password"
          sx={{ mb: 3 }}
          fullWidth
          value={password}
          error={passwordError}
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
          <Link
            size="small"
            component="button"
            onClick={(e) => setRegister(!register)}
          >
            {register ? "Have an account? Login" : "Need an account? Register"}
          </Link>
        </Stack>
      </form>
    </>
  );
};

export default Login;
