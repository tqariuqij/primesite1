import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Chip } from "@mui/material";

export const Member = (props) => {
  const { first_name, last_name, bio, photo, team } = props.member;
  return (
    <Card
      variant="none"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <CardMedia
        component="img"
        image={photo}
        alt={`${first_name}\u0020${last_name}'s picture`}
        sx={{
          width: "70%",
          height: "auto",
          borderRadius: "100%",
          border: 1,
          borderColor: "secondary",
          alignSelf: "center",
          borderColor: "grey.300",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${first_name}\u0020${last_name}`}
        </Typography>{" "}
        <Chip label={team} sx={{ marginBottom: "10px" }} />
        <Typography
          variant="body1"
          color="text.secondary"
          component="div"
          gutterBottom
        >
          {bio}
        </Typography>
      </CardContent>
    </Card>
  );
};
