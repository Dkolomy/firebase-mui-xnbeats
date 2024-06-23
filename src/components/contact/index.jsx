import {
  Button,
  Divider,
  TextField,
  Textarea,
  Typography,
} from "@mui/material";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <Typography variant="h5">Contact Us</Typography>
      <Divider />
      <TextField
        label="Add your name here"
        onChange={(e) => console.log("Field-1")}
        required
        variant="outlined"
        color="secondary"
        type="text"
        sx={{ mb: 3 }}
        fullWidth
        size="small"
      />
      <TextField
        label="Email"
        onChange={(e) => console.log("Field-2")}
        required
        variant="outlined"
        color="secondary"
        type="email"
        sx={{ mb: 3 }}
        fullWidth
        size="small"
      />
      <TextField
        label="Example textarea"
        onChange={(e) => console.log("Field-3")}
        variant="outlined"
        color="secondary"
        type="email"
        sx={{ mb: 3 }}
        fullWidth
        rows={3}
        size="small"
        multiline
      />
      <Button variant="outlined" color="secondary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Contact;
