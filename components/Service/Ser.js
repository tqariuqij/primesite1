import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function OutlinedCard(props) {
  const { Title, Icon, Description } = props.service || undefined;
  return (
    <Box sx={{ minWidth: 275 }} variant="outlined">
      <Card variant="outlined" sx={{ borderRadius: 3, height: 1 }}>
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 400 }}
            gutterBottom
            component="div"
          >
            {`${Icon}   \u00A0\ ${Title}`}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            gutterBottom
            component="div"
          >
            {Description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
