import { Box, Container } from "@mui/material";
import React from "react";

const ContainerComponent = ({ children, ...rest }) => {
  return (
    <Box pt="var(--pt-section)" {...rest}>
      <Container maxWidth="xl" {...rest}>
        {children}
      </Container>
    </Box>
  );
};

export default ContainerComponent;
