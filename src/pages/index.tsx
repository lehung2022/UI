import type { NextPage } from "next";
import { Box } from "@mui/material";
import StyleComponent from "./components/StyleComponent";
import Section from "./components/Section";
import DivisionOne from "./components/DivisionOne";
import DivisionTwo from "./components/DivisionTwo";
import Demo from "./components/Demo";

const Home: NextPage = () => {
  return (
    <>
      <Box width="100%" height="100%" display="flex" flexDirection="row">
        {/* <StyleComponent /> */}
        <Section />
        <DivisionOne />
        <DivisionTwo />
      </Box>
      <Box width="100%" height="100%" display="flex" flexDirection="row">
        <Demo />
      </Box>
    </>
  );
};

export default Home;
