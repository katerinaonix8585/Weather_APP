import styled from "@emotion/styled";
import { WeatherBack } from "assets";
import { NavLink, Link } from "react-router-dom";

import { Logo } from "assets";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;  
  align-items: center;
  background-image: url(${WeatherBack});
  background-size: cover;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  width: 100%;
  padding: 50px;
  background-color: rgba(18, 45, 77, 0.5);
  color: white;
`;

export const HeaderTitleContainer = styled.div`
  width: 100%;
  height: 40px;
  cursor: pointer;
`;

export const HeaderTitle = styled.h2`
color: white;
font-size: 24px;
font-weight: 700;
font-style: initial;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 50px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;

export const Footer = styled.footer`
  display: flex;
  padding: 30px 70px;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  background-color: #2f5a6e;
  color: white;
`;

export const FooterNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: white;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  color: white;
`;
