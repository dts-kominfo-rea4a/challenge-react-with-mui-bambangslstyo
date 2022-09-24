import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";

import Grid from "@mui/material/Grid";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const [contacts, setData] = useState([...contactsJSON]);
  const addContact = ({ inputName, inputPhone, inputEmail, inputPhoto }) => {
    const newData = {
      name: inputName,
      phone: inputPhone,
      email: inputEmail,
      photo: inputPhoto,
    };
    console.log(newData);
    setData([...contacts, newData]);
  };

  return (
    <div className="App">
      <Header />

      <Grid
        container
        spacing={2}
        columns={16}
        mt={3}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={8} sx={{ display: "flex", justifyContent: "center" }}>
          <ContactForm fnSubmitData={addContact} />
        </Grid>
        <Grid item xs={8} sx={{ display: "flex", justifyContent: "center" }}>
          <Contact data={contacts} />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
