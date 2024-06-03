import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ background: '#000',position: "sticky",justifyContent: "space-between" }}>
  <Box width="100px">
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
  </Box>
    <SearchBar />
  </Stack>
);

export default Navbar;