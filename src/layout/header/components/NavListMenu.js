import React from "react";
import {
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function NavListMenu(props) {
  const { menu } = props;

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };

  const renderItems = menu.subMenu.map(({ label, link, target }) => (
    <Link
      to={link}
      key={label}
      target={target !== undefined ? target : "_self"}
    >
      <MenuItem className="!text-trumpos-fontDark hover:!text-trumpos-fontLight !bg-transparent">
        <Typography variant="small" className="mb-1">
          {label}
        </Typography>
      </MenuItem>
    </Link>
  ));

  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography
            as="div"
            href=""
            variant="small"
            className="font-normal !outline-0"
          >
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2 !text-trumpos-fontDark hover:!text-trumpos-fontLight !bg-transparent lg:flex lg:rounded-full"
            >
              {menu.label}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden gap-3 overflow-visible bg-trumpos-page border-trumpos-panelDark max-w-fit lg:grid"
        >
          <ul className="col-span-4 flex flex-col gap-1 !outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 !text-trumpos-fontDark hover:!text-trumpos-fontLight !bg-transparent lg:hidden">
        {menu.label}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}
