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
  );
}
