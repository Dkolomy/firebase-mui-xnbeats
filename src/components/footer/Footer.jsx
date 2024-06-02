import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const linkList = [
    {
      Home: "/",
      Reviews: "/",
      Music: "/",
      Shop: "/",
    },
    {
      Templates: "/",
      Tracks: "/",
      Serum: "/",
      Sylenth: "/",
    },
    {
      Contact: "/contact",
      Privacy: "/",
      Terms: "/",
    },
  ];

  return (
    <Box
      sx={{
        borderTop: "1px solid #000",
        marginTop: "auto",
      }}
      component="footer"
    >
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <List
            dense={true}
            subheader={
              <ListSubheader sx={{ fontSize: "1rem" }}>
                Dmitry Kolomyitsev
              </ListSubheader>
            }
          >
            <ListItem>
              <ListItemText secondary="Copyright © 2024" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={3}>
          <FooterLinks subHead={"Navigate"} list={linkList[0]} />
        </Grid>
        <Grid item xs={3}>
          <FooterLinks subHead={"Free stuff"} list={linkList[1]} />
        </Grid>
        <Grid item xs={3}>
          <FooterLinks subHead={"About"} list={linkList[2]} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
