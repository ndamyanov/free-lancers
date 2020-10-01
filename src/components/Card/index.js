import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";

export default function Card(props) {
  const { name, contacts, rating, service } = props.person;
  const history = useHistory();

  const openDetailView = () => {
    console.log('open detail');
    history.push("/details");

  }

  return (
    <div className="card" onClick={openDetailView}>
      <img src="/blank-profile-poicture.jpg" alt="profile-picture" />
      <h4>{name}</h4>
      <div>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">{service}</Typography>
          <Rating name="read-only" value={rating} readOnly />
        </Box>
      </div>
      <div className="contacts">{contacts}</div>
    </div>
  );
}
