import { IconButton, InputBase, Paper } from "@mui/material";
import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch, useSelector } from "react-redux";
import {
  getSearchResults,
  listentValueChange,
} from "../../store/reducer/searchReducer";
import { useNavigate } from "react-router-dom";
import PATHS from "../../constants/path";
import useDebounce from "../../hooks/useDebounce";

const HeaderSearch = () => {
  const { searchQuery } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickSearchResults = (e) => {
    e?.preventDefault();
    if (searchQuery) {
      navigate(PATHS.SEARCH);
    }
  };
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const onSearchChange = (e) => {
    dispatch(listentValueChange(e.target.value));
  };
  useEffect(() => {
    if (debouncedSearchQuery) {
      dispatch(getSearchResults(debouncedSearchQuery)); // Gọi API tìm kiếm
    }
  }, [debouncedSearchQuery]);

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 10px 2px 5px;",
        display: "flex",
        alignItems: "center",
        flexShink: 0,
        minWidth: {
          mobileXs: "120px",
          mobileSm: "150px",
          mobileMd: "220px",
          mobileXl: "300px",
          tabletMd: "150px",
        },
        border: (theme) => `1px solid ${theme.borderColorCustom.border}`,
        borderRadius: "100px",
        boxShadow: "none",
        backgroundColor: "transparent",
        transition: "border-color 0.3s", // Thêm hiệu ứng chuyển đổi cho viền
        "&:hover": {
          borderColor: "#018ef5", // Màu viền khi hover
        },
        "&:focus-within": {
          borderColor: "#018ef5", // Màu viền khi focus
          outline: "none",
          boxShadow: "0 0 0 3px rgba(1, 142, 245, 0.25)",
        },
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          "& .MuiInputBase-input": {
            fontSize: { mobileXs: "10px", desktopSm: "16px" },
          },
        }}
        placeholder="Tìm kiếm..."
        inputProps={{ "aria-label": "search" }}
        value={searchQuery}
        onChange={onSearchChange}
      />
      <IconButton
        type="submit"
        sx={{
          "&.MuiIconButton-root": {
            p: 0,
          },
          "& .MuiSvgIcon-root": {
            fontSize: { mobileXs: "20px", mobileSm: "24px", desktopSm: "28px" },
          },
        }}
        aria-label="search"
        onClick={handleClickSearchResults}
      >
        <SearchIcon />
      </IconButton>
      {searchQuery && (
        <ClearIcon
          onClick={() => dispatch(listentValueChange(""))}
          sx={{ cursor: "pointer" }}
        />
      )}
    </Paper>
  );
};

export default HeaderSearch;
// border-color: var(--Input-border-active);
//   -webkit-box-shadow: 0 0 0 3px var(--Input-border-focus);
//   box-shadow: 0 0 0 3px var(--Input-border-focus);
//   outline: none;
