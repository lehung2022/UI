import * as React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const MyComponent = styled("div")({
  color: "darkslategray",
  backgroundColor: "#A244C5",
  padding: 8,
  borderRadius: 4,
  width: "100%",
  maxHeight: "100%",
});

export default function StyleComponent() {
  return (
    <MyComponent>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      ></Box>
    </MyComponent>
  );
}
