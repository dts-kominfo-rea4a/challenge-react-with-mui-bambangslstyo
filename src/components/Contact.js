// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      <Card sx={{ width: 500, backgroundColor: "#d5f4e6" }}>
        <>
          <List component="">
            {data.map((data, key) => {
              return (
                <div key={key}>
                  <ListItem>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        margin: "0.25em 0em",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          width: 100,
                          height: 100,
                          borderRadius: "50%",
                        }}
                        image={data.photo}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardContent sx={{ flex: "1 0 auto", textAlign: "left" }}>
                        <Typography variant="h6">{data.name}</Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                          {data.phone}
                        </Typography>
                        <Typography variant="subtitle2" color="text.secondary">
                          {data.email}
                        </Typography>
                      </CardContent>
                    </Box>
                  </ListItem>
                  <Divider sx={{ margin: "0em 0.5em" }} />
                </div>
              );
            })}
          </List>
        </>
      </Card>
    </>
  );
};

export default Contact;
