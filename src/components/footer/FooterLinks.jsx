import {
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";

const FooterLinks = ({ subHead, list }) => {
  return (
    <List
      dense={true}
      component="nav"
      subheader={
        <ListSubheader sx={{ color: "blue" }}>{subHead}</ListSubheader>
      }
    >
      {Object.keys(list).map((k) => (
        <ListItemButton key={k} component="a" href={list[k]}>
          <ListItemText primary={k} />
        </ListItemButton>
      ))}
    </List>
  );
};

export default FooterLinks;
