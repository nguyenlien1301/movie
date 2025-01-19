import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  Box,
  Chip,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { SORT_OPTIONS } from "../../constants/general";

const MoviesFilter = ({
  genre,
  onFilterChange,
  activeGenre,
  onResetFilterChange,
  activeSort,
  onSortChange,
}) => {
  const onSelectChange = (e) => {
    e?.stopPropagation();
    onSortChange?.(e.target.value);
  };

  const _onFilterChange = (id, isActive) => {
    onFilterChange(String(id), !isActive);
  };
  return (
    <Box sx={{ flex: 1, mt: "10px" }}>
      <Accordion defaultExpanded sx={{ mb: "20px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ fontSize: "15px", fontWeight: 500 }}>
            Sort
          </Typography>
        </AccordionSummary>
        <Divider />
        <FormControl
          fullWidth
          disableScrollLock
          sx={{ padding: "14px 16px 16px" }}
        >
          <Select
            defaultValue={SORT_OPTIONS.popularity_asc.value}
            value={activeSort}
            onChange={onSelectChange}
            displayEmpty
            inputProps={{ "aria-label": "Sort Options" }}
            MenuProps={{
              disableScrollLock: true,
            }}
            sx={{
              ".MuiOutlinedInput-input": {
                display: "flex",
                alignItems: "center",
              },
            }}
          >
            {Object.values(SORT_OPTIONS).map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ fontSize: "15px", fontWeight: 500 }}>
            Filter
          </Typography>
        </AccordionSummary>
        <Divider />
        <Box sx={{ padding: "14px 16px 16px" }}>
          <Typography
            sx={{
              cursor: "pointer",
              display: "inline-block",
              p: "8px 15px",
              backgroundColor: "rgba(255, 255, 255, 0.16)",
              borderRadius: "100px",
              transition: "all 0.3s",
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "var(--blue-light)",
              },
            }}
            onClick={onResetFilterChange}
          >
            Clear All
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              mt: "20px",
            }}
          >
            {genre.map((genre, index) => {
              return (
                <Chip
                  key={genre?.id + index}
                  label={genre?.name}
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    borderRadius: 5,
                    cursor: "pointer",
                    background: activeGenre.includes(String(genre?.id))
                      ? "linear-gradient(to top, #25aae1,  #04befe, #3f86ed, #043ea5)"
                      : "",
                  }}
                  disableRipple
                  onClick={() => {
                    _onFilterChange(
                      genre?.id,
                      activeGenre.includes(String(genre?.id) || "")
                    );
                  }}
                />
              );
            })}
          </Box>
        </Box>
      </Accordion>
    </Box>
  );
};

export default MoviesFilter;
