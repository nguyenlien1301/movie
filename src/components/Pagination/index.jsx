import React, { useMemo } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PAGE_STEP = 1;

const MuiPagination = ({ page, limit = 0, total = 0, onPaginationChange }) => {
  const totalPage = useMemo(() => {
    if (!limit || !total) {
      return 1;
    }
    return Math.ceil(Number(total) / Number(limit)) || 1;
  }, [limit, total]);

  const handleChange = (event, value) => {
    onPaginationChange(value);
  };

  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      mt="20px"
    >
      <Pagination
        count={totalPage}
        page={page}
        onChange={handleChange}
        siblingCount={PAGE_STEP}
        boundaryCount={1}
        showFirstButton
        showLastButton
        disableRipple
        sx={{
          "& .MuiButtonBase-root": {
            fontSize: "13px",
          },
          "& .MuiSvgIcon-root": {
            fontSize: "15px",
          },
          "& .Mui-selected": {
            backgroundColor: "#2979ff !important",
          },
        }}
      />
    </Stack>
  );
};

export default MuiPagination;
