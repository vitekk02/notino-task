import { FC } from "react";
import { Nav, NavContent, NavLink } from "./navbarStyles";

export const Navbar: FC = () => {
  return (
    <Nav>
      <NavContent>
        <NavLink to="/">Products</NavLink>
      </NavContent>
    </Nav>
  );
};
