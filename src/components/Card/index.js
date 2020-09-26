import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function Card(props) {
  const { name, contacts, rating } = props.person;
  return (
    <div className="card">
      <img src="/blank-profile-poicture.jpg" alt="profile-picture" />
      <h4>{name}</h4>
      <div>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Read only</Typography>
          <Rating name="read-only" value={rating} readOnly />
        </Box>
      </div>
      <div className="contacts">{contacts}</div>
    </div>
  );
}
