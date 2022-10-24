import * as React from "react";
import styled from "@emotion/styled";
import { Box, Grid, Paper  } from "@mui/material";

const DivisionTwo = styled("div")({
  backgroundColor: "#D33526",
  padding: 8,
  borderRadius: 4,
  width: "100%",
  maxHeight: "100%",
});

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));
  

// function FormRow() {
//     return (
//       <React.Fragment>
//         <Grid item xs={4}>
//           <Item>Item</Item>
//         </Grid>
//         <Grid item xs={4}>
//           <Item>Item</Item>
//         </Grid>
//         <Grid item xs={4}>
//           <Item>Item</Item>
//         </Grid>
//       </React.Fragment>
//     );
//   }

export default function FourthBox() {
  return (
    <DivisionTwo>
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
      {/* <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid> */}
    </DivisionTwo>
  );
}
