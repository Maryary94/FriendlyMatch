import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";
import "./Settings.css";

const options = [{ name: "Edit Profile", link: "/EditProfile" }];

const ITEM_HEIGHT = 48;

export default function SettingsForEditGame() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <SettingsIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <Link key={option.name} to={option.link} className="SettingsColors">
            <MenuItem
              selected={option.name === "Edit Group"}
              onClick={handleClose}
            >
              {option.name}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
}
