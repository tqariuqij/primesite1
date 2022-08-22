import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { Button, Stack, CardActionArea, Avatar, Chip } from "@mui/material";
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import projects from "../../data/index/projects.json";

export default function Detail(props) {
  const router = useRouter();
  const projectData =
    projects.find((project) => project._id == props.identifier) || {};
  const { ["Preview Link"]: projectLink, Description } = projectData;
  return (
    <Card
      variant="none"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Stack direction="column" spacing={2} alignItems="center" maxWidth={900}>
        <Stack width={1}>
          <Stack direction="column" width={1}>
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              onClick={() => router.back()}
              sx={{ cursor: "pointer" , paddingBottom: 1.5}}
            >
              <Card
                variant="none"
                sx={{ height: "40px", width: "40px", borderRadius: 50 }}
              >
                <CardActionArea
                  sx={{
                    height: 1,
                    width: 1,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <ChevronLeftRoundedIcon fontSize="medium" />
                </CardActionArea>
              </Card>
              <Typography variant="body1" gutterBottom component="div">
                Back
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h2" gutterBottom component="div">
                {projectData.Name}
              </Typography>
              <a href={projectLink}>
                <Button
                  variant="none"
                  size="small"
                  endIcon={<LaunchRoundedIcon color="secondary" />}
                  sx={{ maxHeight: "35px", color: "#616161", borderRadius: 2 }}
                >
                  Preview
                </Button>
              </a>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                alt="Company logo"
                src={projectData["Client logo"]}
                sx={{ height: "26px", width: "26px" }}
              />
              <FiberManualRecordRoundedIcon
                fontSize="small"
                sx={{ height: "5px", width: "5px", color: "#616161" }}
              />
              <Typography
                variant="subtitle2"
                gutterBottom
                component="div"
                color="text.secondary"
              >
                {projectData.Client}
              </Typography>
              <FiberManualRecordRoundedIcon
                fontSize="small"
                sx={{ height: "5px", width: "5px", color: "#616161" }}
              />
              <Chip label={projectData.Type} size="small" />
            </Stack>
          </Stack>
        </Stack>

        <Stack direction="column" spacing={2}>
          <CardMedia
            component="img"
            image={projectData["Main image"]}
            alt="Project Main Image"
            sx={{
              borderRadius: "10px",
              border: 1,
              borderColor: "#eceff1",
              maxHeight: "500px",
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              About project
            </Typography>
            <Typography variant="body1" gutterBottom color="text.secondary">
              {Description}
            </Typography>
          </CardContent>
        </Stack>
      </Stack>
    </Card>
  );
}

export async function getStaticProps(context) {
  if (!projectData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { projects: projectData }, // will be passed to the page component as props
  };
}

