import { Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.authUser.user);

  return (
    <Container>
      <Typography variant="h6">Profile</Typography>
      <Grid container>
        <Grid item xs={3}><Typography variant="body1">UID</Typography></Grid>
        <Grid item xs={9}><Typography variant="body2">{user.uid}</Typography></Grid>
        <Grid item xs={3}><Typography variant="body1">First Name</Typography></Grid>
        <Grid item xs={9}><Typography variant="body2">{user.name}</Typography></Grid>
        <Grid item xs={3}><Typography variant="body1">Last Name</Typography></Grid>
        <Grid item xs={9}><Typography variant="body2">{user.lastname}</Typography></Grid>
        <Grid item xs={3}><Typography variant="body1">Email</Typography></Grid>
        <Grid item xs={9}><Typography variant="body2">{user.email}</Typography></Grid>
        <Grid item xs={3}><Typography variant="body1">Role</Typography></Grid>
        <Grid item xs={9}><Typography variant="body2">{user.role}</Typography></Grid>
      </Grid>
    </Container>
  );
}
