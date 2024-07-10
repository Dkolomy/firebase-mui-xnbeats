import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import {
  Box,
  Container,
  Snackbar,
  Alert,
  Button,
  CircularProgress,
} from "@mui/material";
//import { Provider } from "react-redux";
//import { store } from "./state/store";
import { useDispatch, useSelector, useStore } from "react-redux";
import { autoSignIn } from "./state/authorization/authSlice";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact";
import Home from "./components/home";
import Login from "./components/login";
import { useEffect, useState } from "react";
import { auth, usersCollection } from "./utils/fbase";
import { onAuthStateChanged } from "firebase/auth";
import * as api from "./api";
import Profile from "./components/Profile";
import Dashboard from "./components/dashboard";
import { AuthHoc } from "./components/hoc/AuthHoc";
import { getDocs, query, where } from "@firebase/firestore";

const PrivateRoutes = (isAuth) => {
  // let isAuth = useSelector((state) => state.authUser.isAuth);
  // console.log(isAuth)
  //  const st = useStore();
  //  console.log(st.getState().authUser.isAuth)

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

const App = () => {
  const dispatch = useDispatch();

  let authUser = useSelector((state) => state.authUser);

  useEffect(() => {
    // api.autoSignIn().then((result) => {
    //   dispatch(autoSignIn(result));
    // });
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const q = query(usersCollection, where("uid", "==", user.uid));
        getDocs(q).then(querySnapshot => {
          dispatch(autoSignIn({ isAuth: true, user: querySnapshot.docs[0].data(), errorCode: "" }));
        });
      } else {
        dispatch(autoSignIn({ isAuth: false, user: null, errorCode: "" }));
      }
      // console.log(user);
      // console.log("User set");
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //  useEffect(() => {
  //    dispatch(autoSignIn());
  // let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  //   console.log("User set");
  // });
  // return () => {
  //   unsubscribe();
  //   console.log(`Cleanup`);
  // };
  //  }, []);

  const app = (checkingAuth) => (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route element={<PrivateRoutes auth={checkingAuth}/>}>
        <Route path="/dashboard" element={<Dashboard auth={checkingAuth} />} />
        <Route path="/contact" element={<Contact auth={checkingAuth} />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );

  // Snackbar related BEGIN
  // const [open, setOpen] = useState(false);
  // const [severity, setSeverity] = useState("success");
  // const [message, setMessage] = useState("Message");

  // const hadleSnackBar = (message, severity) => {
  //   setSeverity(severity);
  //   setMessage(message);
  //   setOpen(true);
  // };

  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event) => {
  //   setOpen(false);
  // };
  // Snackbar related END

  //  dispatch(testData());
  //  const [user, setUser] = useState();

  // useEffect(() => {
  //   dispatch(autoSignIn());
  // }, []);

  //  const store  = useStore();
  //  console.log(store.getState())

  // const [isAuth] = useSelector((state) => (state.authUser));
  // console.log(isAuth);

  //  useEffect(() => {
  //    dispatch(autoSignIn());
  // let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  //   console.log("User set");
  // });
  // return () => {
  //   unsubscribe();
  //   console.log(`Cleanup`);
  // };
  //  }, []);

  // dispatch(autoSignIn());
  // const ddd = useSelector((state) => state.authUser.isAuth);
  // console.log("===============");
  // console.log(user);
  // console.log("===============");

  // const [isAuth, user, checkingAuth] = useSelector(state => (state.authUser));
  // console.log("===============")
  // console.log("isAuth: ",isAuth)
  // console.log(user)
  // console.log("checkingAuth: ",checkingAuth)
  // console.log("===============")

  console.log(authUser);

  return (
    <Container maxWidth="lg">
      <Header />
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "87vh" }}>
        {/* {authUser.isAuth ? app(authUser.isAuth) : <CircularProgress />} */}
        {app(authUser.isAuth)}
        <Footer />
      </Box>
      {/* <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        key="top left"
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar> */}
    </Container>
  );
};

export default App;
