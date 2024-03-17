import React, { useState } from "react";
import { Routes } from "../../config/routes";
import styled from "styled-components";
import Logo from "./Logo";
import Image from "next/image";
import Close from "../../public/icons/close.svg";
import Menu from "../../public/icons/menu.svg";
import { useRouter } from "next/router";
import { MenuItemLink } from "./menu-item-link";
import { MenuItemButton } from "./menu-item-button";
import { Icons } from "../icons";

const menuItems = [
  { text: "Projects", icon: <Icons.projects/>, href: Routes.projects },
  { text: "Issues", icon: <Icons.issues/>, href: Routes.issues },
  { text: "Alerts", icon: <Icons.alert/>, href: Routes.alerts },
  { text: "Users", icon: <Icons.users/>, href: Routes.users },
  { text: "Settings", icon: <Icons.settings/>, href: Routes.settings },
];

type MenuItem = (typeof menuItems)[number];

interface SidebarProps {
  $isSidebarCollapsed: boolean;
}

const SharedContainerStyles = styled.div<SidebarProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.gray[900]};
    transition: width .15s ease-in-out;

    @media (min-width: 64rem) {
        width: ${({ $isSidebarCollapsed }) => $isSidebarCollapsed ? "5.1875rem" : "17.5rem"};
        height: 100vh;
    }
`;

const SidebarContainer = styled(SharedContainerStyles)``;

const FixedContainer = styled(SharedContainerStyles)`
    position: fixed;
`;

const HeaderContainer = styled.header`
    width: calc(100% - 2rem);
    height: ${({ theme }) => theme.spacing[16]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${({ theme }) => theme.spacing[4]};
    background: ${({ theme }) => theme.colors.gray[900]};
    position: relative;
    z-index: 33;

    @media (min-width: 64rem) {
        height: unset;
        padding: ${({ theme }) => `${theme.spacing[8]} ${theme.spacing[4]} ${theme.spacing[6]}`};
    }
`;

interface IsMobileMenuOpenProps {
  $isMobileMenuOpen: boolean;
}

const MenuOverlay = styled.div<IsMobileMenuOpenProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.gray[700]};
    z-index: 2;
    transform: translateX(100%);
    opacity: 1;
    transition: opacity 300ms ease-in-out;
    ${({ $isMobileMenuOpen }) => $isMobileMenuOpen ? `
      opacity: 0.6;
      transform: translateX(0);
    ` : ""};

    @media (min-width: 64rem) {
        display: none;
    }
`;

const Nav = styled.nav<IsMobileMenuOpenProps>`
    position: fixed;
    top: ${({ theme }) => theme.spacing[16]};
    bottom: 0;
    width: 19.5rem;
    padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]} ${theme.spacing[6]}`};
    flex: 1;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.gray[900]};
    z-index: 33;
    transform: ${({ $isMobileMenuOpen }) => $isMobileMenuOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform .3s;

    @media (min-width: 64rem) {
        position: relative;
        top: 0;
        width: calc(100% - 2rem);
        padding: ${({ theme }) => `${theme.spacing[0]} ${theme.spacing[4]} ${theme.spacing[8]}`};
        transform: none;
    }
`;

const SharedList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const List = styled(SharedList)`
    flex: 1;
`;

const MobileMenuButton = styled.button`
    background: transparent;
    border: none;
    outline: none;
    @media (min-width: 64rem) {
        display: none;
    }
`;

const ArrowWrapper = styled.div<SidebarProps>`
    transform: ${({ $isSidebarCollapsed }) => $isSidebarCollapsed ? "rotate(180deg)" : "rotate(0)"};
    transition: all .3s ease-in-out;
`;

export function SidebarNavigation () {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <div>
      <SidebarContainer $isSidebarCollapsed={isSidebarCollapsed}>
        <FixedContainer $isSidebarCollapsed={isSidebarCollapsed}>
          <HeaderContainer>
            <Logo isSidebarCollapsed={isSidebarCollapsed}/>
            <MobileMenuButton
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Image
                src={isMobileMenuOpen ? Close : Menu}
                alt={isMobileMenuOpen ? "close menu" : "open menu"}
              />
            </MobileMenuButton>
          </HeaderContainer>
          <MenuOverlay $isMobileMenuOpen={isMobileMenuOpen}/>
          <Nav $isMobileMenuOpen={isMobileMenuOpen}>
            <List>
              {menuItems.map((menuItem: MenuItem, index) => (
                <MenuItemLink
                  key={index}
                  {...menuItem}
                  isCollapsed={isSidebarCollapsed}
                  isActive={router.pathname === menuItem.href}
                />
              ))}
            </List>
            <SharedList>
              <MenuItemButton
                text="Support"
                icon={<Icons.support/>}
                isCollapsed={isSidebarCollapsed}
                onClick={() => alert("Support")}
              />
              <MenuItemButton
                text="Collapse"
                icon={<ArrowWrapper $isSidebarCollapsed={isSidebarCollapsed}><Icons.arrowLeft/></ArrowWrapper>}
                isCollapsed={isSidebarCollapsed}
                onClick={() => setIsSidebarCollapsed(prevState => !prevState)}
              />
            </SharedList>
          </Nav>
        </FixedContainer>
      </SidebarContainer>
    </div>
  );
};

