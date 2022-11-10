import * as React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const DivisionOne = styled("div")({
  backgroundColor: "#D33526",
  padding: 8,
  borderRadius: 4,
  width: "100%",
  maxHeight: "100%",
});

export default function ThirdBox() {
  return (
    <DivisionOne>
      <Box
        sx={{
          width: 600,
          height: 600,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      ></Box>
    </DivisionOne>
  );
}
