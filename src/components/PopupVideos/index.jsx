import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { handleClosePopup } from "../../store/reducer/videoPopupReducer";
import ReactPlayer from "react-player";
import getImageUrl, { getMediaImageUrl } from "../../utils/imageUrl";

const PopupVideos = ({ title, backdrop_path }) => {
  const dispatch = useDispatch();
  const { open, videoKey } = useSelector((state) => state.videoPopup);
  const handleClose = () => {
    dispatch(handleClosePopup());
  };

  return (
    <Box
      className="Box"
      sx={{ backgroundColor: "white", width: "100%", height: "100%" }}
    >
      <Dialog
        open={open}
        onClose={handleClose}
        disableScrollLock
        maxWidth="md"
        fullWidth
      >
        <DialogContent
          sx={{
            position: "relative",
            backgroundColor: "white",
            padding: "50px 10px 10px 10px",
          }}
        >
          {title && (
            <Typography
              sx={{
                position: "absolute",
                top: "10px",
                color: "black",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              {title}
            </Typography>
          )}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
              zIndex: 1, // Đảm bảo nút hiển thị trên các thành phần khác
            }}
          >
            <CloseIcon />
          </IconButton>
          {videoKey && (
            <Box>
              <ReactPlayer
                width="100%"
                height="100%"
                style={{ aspectRatio: "16 / 9" }}
                url={`https://www.youtube.com/embed/${videoKey}`}
                poster={getImageUrl(backdrop_path)}
                controls
                playing
              />
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default PopupVideos;
