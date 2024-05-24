import { useNavigate } from "react-router-dom"
import { LayoutProps } from "./types"
import {
  LayoutWrapper,
  Header,  
  HeaderTitleContainer,
  NavContainer,
  Main,  
  StyledNavLink,  
  HeaderTitle
} from "./styles"



function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()

  const goToHomePage = () => navigate("/")

  return (
    <LayoutWrapper>
      <Header>
        <HeaderTitleContainer onClick={goToHomePage}>
          <HeaderTitle>Weather App</HeaderTitle>
        </HeaderTitleContainer>
        
        <NavContainer>
          
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/"
          >
            Home
          </StyledNavLink>
          
          <StyledNavLink
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/weather"
          >
            Weathers
          </StyledNavLink>
        
        </NavContainer>
      
      </Header>

      <Main>{children}</Main>  

    </LayoutWrapper>
  )
}

export default Layout;
