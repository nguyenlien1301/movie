import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import { Spin } from "antd";

function RouterWrapper() {
  const [progress, setProgress] = useState(0); // Trạng thái thanh loading
  const [showOverlay, setShowOverlay] = useState(true); // Trạng thái của overlay
  const location = useLocation();

  useEffect(() => {
    let interval;
    setProgress(0); // Reset progress khi chuyển trang

    // Hiển thị overlay
    setShowOverlay(true);

    // Tăng dần thanh loading
    if (location.pathname) {
      interval = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return oldProgress + 10; // Tăng 10% mỗi 100ms
        });
      }, 100);
    }

    return () => clearInterval(interval); // Dọn dẹp interval khi unmount
  }, [location.pathname]);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setShowOverlay(false); // Ẩn overlay sau khi hoàn tất
        setProgress(0); // Reset thanh loading
      }, 100); // Giữ overlay trong 500ms sau khi xong
      return () => clearTimeout(timeout);
    }
  }, [progress]);
  return (
    <>
      {progress > 0 && (
        <Box
          sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 99999 }}
        >
          <LinearProgress
            variant="determinate"
            value={progress}
            // sx={{ background: "red" }}
          />
        </Box>
      )}
      <Fade in={showOverlay} timeout={{ enter: 0, exit: 100 }}>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 1)", // Tối toàn bộ trang
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {showOverlay && <Spin></Spin>}
        </Box>
      </Fade>
    </>
  );
}

export default RouterWrapper;
