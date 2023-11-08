import * as React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static"
    sx={{

    }}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Hallo
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
