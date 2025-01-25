import { Box, Typography, Link, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { BUTTON_CUSTOM_TYLES } from "../../components/CustomStyleds";
import ShareLink from "../../components/ShareLink";
import { PATH_URL } from "../../constants/pathurl";
import ContainerComponent from "../../components/ContainerComponent";

const Footer = () => {
  return (
    <ContainerComponent
      sx={{
        // backgroundColor: (theme) => theme.bgFooter.background,
        backgroundColor: "var(--bg-dark-blue)",
        py: "30px",
        mt: "30px",
      }}
    >
      <Grid
        container
        columnSpacing={{ mobileXs: 2, mobileMd: 4 }}
        rowSpacing={4}
      >
        <Grid item size={{ tabletLg: 3, mobileSm: 6 }}>
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: "900",
              color: "#FF5733",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              letterSpacing: "0.5rem",
              textTransform: "uppercase",
            }}
          >
            Movie
          </Typography>
          <Box>
            <Typography
              variant="body2"
              sx={{
                fontSize: "var(--fz-text-sm)",
                color: "var(--white)",
              }}
            >
              © 2024 YourApp. All rights reserved.
            </Typography>
          </Box>
        </Grid>
        <Grid item size={{ tabletLg: 3, mobileSm: 6 }}>
          <Typography
            variant="h6"
            sx={{ fontSize: "var(--fz-h6)", color: "var(--white)" }}
          >
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: "8px" }}>
            <ShareLink title={"Email"} path={PATH_URL}>
              <Button
                color="inherit"
                sx={{
                  ...BUTTON_CUSTOM_TYLES,
                  minWidth: "30px",
                  height: "30px",
                  color: "var(--white)",
                }}
              >
                <EmailIcon />
              </Button>
            </ShareLink>
            <ShareLink type="facebook" title={"Facebook"} path={PATH_URL}>
              <Button
                color="inherit"
                sx={{
                  ...BUTTON_CUSTOM_TYLES,
                  minWidth: "30px",
                  height: "30px",
                  color: "var(--white)",
                }}
              >
                <FacebookIcon />
              </Button>
            </ShareLink>
            <ShareLink type="instagram" title={"Instagram"} path={PATH_URL}>
              <Button
                color="inherit"
                sx={{
                  ...BUTTON_CUSTOM_TYLES,
                  minWidth: "30px",
                  height: "30px",
                  color: "var(--white)",
                }}
              >
                <InstagramIcon />
              </Button>
            </ShareLink>
            <ShareLink type="twitter" title={"Twitter"} path={PATH_URL}>
              <Button
                color="inherit"
                sx={{
                  ...BUTTON_CUSTOM_TYLES,
                  minWidth: "30px",
                  height: "30px",
                  color: "var(--white)",
                }}
              >
                <TwitterIcon />
              </Button>
            </ShareLink>
          </Box>
        </Grid>
        <Grid item size={{ tabletLg: 3, mobileSm: 6 }}>
          <Typography
            variant="h6"
            sx={{ fontSize: "var(--fz-h6)", color: "var(--white)" }}
          >
            About Us
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 1, fontSize: "var(--fz-text-sm)", color: "var(--white)" }}
          >
            Best movie viewing app, fastest updates.
          </Typography>
          <Link
            href="#"
            color="inherit"
            sx={{
              display: "block",
              mt: 1,
              fontSize: "var(--fz-text-sm)",
              color: "var(--white)",
            }}
          >
            Terms of Use
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{
              display: "block",
              mt: 1,
              fontSize: "var(--fz-text-sm)",
              color: "var(--white)",
            }}
          >
            Privacy Policy
          </Link>
        </Grid>
        <Grid item size={{ tabletLg: 3, mobileSm: 6 }}>
          <Typography
            variant="h6"
            sx={{ fontSize: "var(--fz-h6)", color: "var(--white)" }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 1, fontSize: "var(--fz-text-sm)", color: "var(--white)" }}
          >
            Email: nguyenvanlien130102@gmail.com
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 1, fontSize: "var(--fz-text-sm)", color: "var(--white)" }}
          >
            Phone: +84 978913405
          </Typography>
        </Grid>
      </Grid>
    </ContainerComponent>
  );
};

export default Footer;
