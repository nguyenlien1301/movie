import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCloseModal } from "../../store/reducer/videoPopupReducer";
import ButtonCustom from "../Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: (theme) => theme.palette.common,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const ModalNotifi = () => {
  const { openModal } = useSelector((state) => state.videoPopup);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(handleCloseModal());
  };
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 400 }}>
        <Typography
          sx={{ textAlign: "center", fontWeight: "600", fontSize: "25px" }}
        >
          Thông báo
        </Typography>
        <Box sx={{ mt: "12px" }}>
          <Typography sx={{ mb: "5px" }}>Lần trước bạn đã xem đến</Typography>
          <Typography>Bạn có muốn xem tiếp ?</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            mt: "20px",
          }}
        >
          <Button variant="contained">Có, xem tiếp</Button>
          <Button variant="contained">Thôi, xem từ đầu</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalNotifi;
