import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "react-feather";
import {
  Card,
  CardActionArea,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
const colors = {
  green: "#04A54A",
};

export default function Footer() {
  return (
    <div className={styles.home_section_5}>
      <div className={styles.home_section_5_container}>
        <Stack>
          <Typography
            variant="subtitle2"
            gutterBottom
            component="div"
            textAlign="center"
            color="#424242"
          >
            Let&apos;s Connect
          </Typography>

          <Stack direction="row" spacing={1}>
            <Link href="https://twitter.com/primedevsco">
              <Card
                variant="outlined"
                sx={{ width: "35px", height: "35px", borderRadius: "20px" }}
              >
                <CardActionArea
                  sx={{ display: "flex", alignItems: "center", height: 1 }}
                >
                  <Twitter
                    height="20"
                    width="20"
                    strokeWidth="2"
                    stroke={colors.green}
                    className={styles.linkz}
                  />
                </CardActionArea>
              </Card>
            </Link>
            <Link href="https://web.facebook.com/primedevsco">
              <Card
                variant="outlined"
                sx={{ width: "35px", height: "35px", borderRadius: "20px" }}
              >
                <CardActionArea
                  sx={{ display: "flex", alignItems: "center", height: 1 }}
                >
                  <Facebook
                    height="20"
                    width="20"
                    strokeWidth="2"
                    stroke={colors.green}
                    className={styles.linkz}
                  />
                </CardActionArea>
              </Card>
            </Link>
            <Link href="https://www.instagram.com/primedevs/">
              <Card
                variant="outlined"
                sx={{ width: "35px", height: "35px", borderRadius: "20px" }}
              >
                <CardActionArea
                  sx={{ display: "flex", alignItems: "center", height: 1 }}
                >
                  <Instagram
                    height="20"
                    width="20"
                    strokeWidth="2"
                    stroke={colors.green}
                    className={styles.linkz}
                  />
                </CardActionArea>
              </Card>
            </Link>
            <Link href="https://linkedin.com/company/primedevs">
              <Card
                variant="outlined"
                sx={{ width: "35px", height: "35px", borderRadius: "20px" }}
              >
                <CardActionArea
                  sx={{ display: "flex", alignItems: "center", height: 1 }}
                >
                  <Linkedin
                    height="20"
                    width="20"
                    strokeWidth="2"
                    stroke={colors.green}
                    className={styles.linkz}
                  />
                </CardActionArea>
              </Card>
            </Link>
          </Stack>
        </Stack>
      </div>
    </div>
  );
}
