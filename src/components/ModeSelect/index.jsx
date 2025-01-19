import { Box, Button, useColorScheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ModeSelect = () => {
  const { mode, setMode } = useColorScheme();
  const handleChange = () => {
    const selectedMode = mode === "light" ? "dark" : "light";
    setMode(selectedMode);
  };
  return (
    <Button
      onClick={handleChange}
      sx={{
        minWidth: 0,
        flexShrink: 0,
        borderRadius: "10px",
        border: (theme) => `1px solid ${theme.borderColorCustom.border}`,
        p: { mobileXs: "4px 5px", mobileSm: "7px 8px", desktopSm: "9px 10px" },
      }}
    >
      {/* {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />} */}
    </Button>
  );
};
export default ModeSelect;
