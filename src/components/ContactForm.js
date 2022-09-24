// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const ContactForm = ({ fnSubmitData }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhoto, setInputPhoto] = useState("");

  const hanName = (e) => {
    setInputName(e.target.value);
  };

  const hanPhone = (e) => {
    setInputPhone(e.target.value);
  };

  const hanEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const hanPhoto = (e) => {
    setInputPhoto(e.target.value);
  };

  const onSubmitHandler = (e) => {
    // supaya tidak refresh
    e.preventDefault();

    fnSubmitData({ inputName, inputPhone, inputEmail, inputPhoto });

    // kosongkan isi input data
    setInputName("");
    setInputPhone("");
    setInputEmail("");
    setInputPhoto("");
  };

  return (
    <>
      <Card sx={{ width: 500, backgroundColor: "#edf5d8b8" }}>
        <form onSubmit={onSubmitHandler}>
          <CardContent>
            <TextField
              text="text"
              label="Name &#42;"
              variant="filled"
              fullWidth
              margin="normal"
              value={inputName}
              onChange={hanName}
            />
            <TextField
              text="text"
              label="Phone &#42;"
              variant="filled"
              fullWidth
              margin="normal"
              value={inputPhone}
              onChange={hanPhone}
            />
            <TextField
              text="text"
              label="Email &#42;"
              variant="filled"
              fullWidth
              margin="normal"
              value={inputEmail}
              onChange={hanEmail}
            />
            <TextField
              text="text"
              label="Photo URL &#42;"
              variant="filled"
              fullWidth
              margin="normal"
              value={inputPhoto}
              onChange={hanPhoto}
            />
          </CardContent>
          <CardActions>
            <Button variant="contained" color="success" type="submit">
              ADD NEW
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  );
};

export default ContactForm;
