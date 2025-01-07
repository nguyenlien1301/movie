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
        backgroundColor: (theme) => theme.bgFooter.background,
        py: "30px",
        mt: "30px",
      }}
    >
      <Grid
        container
        // spacing={4}
        // columnGap={{ mobileXs: 2, mobileMd: 4 }}
        // rowGap={4}
        columnSpacing={{ mobileXs: 2, mobileMd: 4 }}
        rowSpacing={4}
      >
        <Grid item size={{ tabletLg: 3, mobileSm: 6 }}>
          <Box
            sx={{
              width: "var(--size-logo)",
              height: "var(--size-logo)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              width="70"
              height="70"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    style={{
                      stopColor: "#D71313",
                      stopOpacity: 1,
                    }}
                  />
                  <stop
                    offset="100%"
                    style={{
                      stopColor: "#FF0000",
                      stopOpacity: 1,
                    }}
                  />
                </linearGradient>
              </defs>

              <polygon
                points="50,15 90,15 110,50 90,85 50,85 30,50"
                stroke="url(#grad1)"
                fill="none"
                stroke-width="4"
              />
              <polygon
                points="50,15 90,15 110,50 90,85 50,85 30,50"
                stroke="transparent"
                fill="none"
                stroke-width="2"
              />

              <polygon
                points="110,15 150,15 170,50 150,85 110,85 90,50"
                stroke="url(#grad1)"
                fill="none"
                stroke-width="4"
              />
              <polygon
                points="110,15 150,15 170,50 150,85 110,85 90,50"
                stroke="transparent"
                fill="none"
                stroke-width="2"
              />

              <polygon
                points="30,50 70,50 90,85 70,120 30,120 10,85"
                stroke="url(#grad1)"
                fill="none"
                stroke-width="4"
              />
              <polygon
                points="30,50 70,50 90,85 70,120 30,120 10,85"
                stroke="transparent"
                fill="none"
                stroke-width="2"
              />

              <polygon
                points="90,50 130,50 150,85 130,120 90,120 70,85"
                stroke="url(#grad1)"
                fill="none"
                stroke-width="4"
              />
              <polygon
                points="90,50 130,50 150,85 130,120 90,120 70,85"
                stroke="transparent"
                fill="none"
                stroke-width="2"
              />

              <polygon
                points="50,85 90,85 110,120 90,155 50,155 30,120"
                stroke="url(#grad1)"
                fill="none"
                stroke-width="4"
              />
              <polygon
                points="50,85 90,85 110,120 90,155 50,155 30,120"
                stroke="transparent"
                fill="none"
                stroke-width="2"
              />

              <polygon
                points="110,85 150,85 170,120 150,155 110,155 90,120"
                stroke="url(#grad1)"
                fill="none"
                stroke-width="4"
              />
              <polygon
                points="110,85 150,85 170,120 150,155 110,155 90,120"
                stroke="transparent"
                fill="none"
                stroke-width="2"
              />
            </svg>
          </Box>
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
            Theo dõi chúng tôi
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
            Về chúng tôi
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 1, fontSize: "var(--fz-text-sm)", color: "var(--white)" }}
          >
            Ứng dụng xem phim tốt nhất, cập nhật nhanh nhất.
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
            Điều khoản sử dụng
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
            Chính sách bảo mật
          </Link>
        </Grid>
        <Grid item size={{ tabletLg: 3, mobileSm: 6 }}>
          <Typography
            variant="h6"
            sx={{ fontSize: "var(--fz-h6)", color: "var(--white)" }}
          >
            Liên hệ với chúng tôi
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
