import { useEffect, useState } from "react";
import { Button, TextField, Link, Divider, Stack } from "@mui/material";

//import CloseIcon from "@mui/icons-material/Close";
//import { signInWithEmailAndPassword } from "firebase/auth";
//import { auth } from "../../utils/firebase";
//import { registerUser } from "../../store/actions";
import { useDispatch, useSelector, useStore } from "react-redux";
import { registerUser, loginUser } from "../../state/authorization/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const currState = useSelector((state) => state.authUser);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [loading, setLoading] = useState(false);
  const [register, setRegister] = useState(true);

  // console.log(data.value.email);

  useEffect(() => {
    console.log("*********")
    console.log(currState)
  }, [currState])

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
      dispatch(registerUser(formData));
      handleRedirection();
    } else {
      formData = {
        email: userData.email,
        password: userData.password,
      };
      dispatch(loginUser(formData));
      handleRedirection();
    }
  };

  const handleRedirection = () => {
    setLoading(false);
    if (currState.isAuth) {
      navigation("/");
    } else {
      setRegister(true);
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
