import React from "react";
import { Link } from "react-router-dom";

import { Typography, MenuItem } from "@material-tailwind/react";

import { menuItems } from "../../../config/menu";

export default function NavListItem(props) {
  return (
    <React.Fragment>
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        {menuItems.map((menu, key) =>
          <Link
            key={menu.label}
            to={menu.link}
            target={menu.target !== undefined ? menu.target : "_self"}
            onClick={() => {
              if (menu.self) {
                window.location.replace(menu.link);
              }
            }}
          >
            <MenuItem className="flex items-center gap-2 !text-trumpos-fontDark hover:!text-trumpos-fontLight hover:underline hover:underline-offset-4 !bg-transparent lg:rounded-full">
              <Typography as="p" variant="h4" className="font-menu" color="yellow">
                {menu.label}
              </Typography>
            </MenuItem>
          </Link>
        )}
      </ul>
    </React.Fragment>
  );
}
