import { Link } from "@mui/material";
import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  TwitterShareButton,
} from "react-share";

const ShareLink = ({ path, title, type, children }) => {
  //   const email = "nguyenvanlien130102@gmail.com";
  switch (type) {
    case "facebook":
      return (
        <FacebookShareButton url={path} title={title}>
          {children}
        </FacebookShareButton>
      );
    case "twitter":
      return (
        <TwitterShareButton url={path} title={title}>
          {children}
        </TwitterShareButton>
      );
    case "instagram":
      return (
        <InstapaperShareButton url={path} title={title}>
          {children}
        </InstapaperShareButton>
      );
    default:
      return (
        <EmailShareButton
          url={path}
          title={title}
          //   body={`Check this out! You can reach me at ${email}.`}
        >
          {children}
          {/* <Link href="mailto:">{children}</Link> */}
        </EmailShareButton>
      );
  }
};

export default ShareLink;

// <ShareLink title={facebook} path={pathURL}></ShareLink> mặc định
// <ShareLink type="intargram" title={intargram} path={pathURL}></ShareLink> mặc định
