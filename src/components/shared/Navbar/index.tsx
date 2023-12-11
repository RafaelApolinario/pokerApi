import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

interface NavbarProps {
  name: string | null;
}

function Navbar(props: NavbarProps) {
  return (
    <AppBar position="relative">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="inherit" noWrap>
          {props.name ? props.name : "POKEMON"}
        </Typography>
        <Link to="/favorite">
          <IconButton>
            <FavoriteIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
