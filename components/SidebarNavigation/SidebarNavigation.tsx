import React, { useState } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import Close from "../../public/icons/close.svg";
import Menu from "../../public/icons/menu.svg";
import { useRouter } from "next/router";
import { Icons } from "../icons";
import { Routes } from "../../config/routes";
import { MenuItemButton } from "@/components/SidebarNavigation/menu-item-button";
import { MenuItemLink } from "@/components/SidebarNavigation/menu-item-link";
import { breakpoint, color, space } from "../../styles/theme";
import Logo from "@/components/SidebarNavigation/Logo";

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

const containerStyles = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${color("gray", 900)};
    transition: width .15s ease-in-out;

    @media (min-width: ${breakpoint("desktop")}) {
        width: 17.5rem;
        height: 100vh;
    }
`;

const SidebarContainer = styled.div<SidebarProps>`
    ${containerStyles};
    @media (min-width: ${breakpoint("desktop")}) {
        ${({ $isSidebarCollapsed }) =>
                $isSidebarCollapsed &&
                css`
                    &,
                    ${FixedContainer} {
                        width: 5.1875rem;
                    }
                `};
    }
`;

const FixedContainer = styled.div`
    ${containerStyles};
    position: fixed;
`;

const HeaderContainer = styled.header`
    width: calc(100% - 2rem);
    height: ${space(16)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${space(4)};
    background: ${color("gray", 900)};
    position: relative;
    z-index: 33;

    @media (min-width: ${breakpoint("desktop")}) {
        height: unset;
        padding: ${space(8)} ${space(4)} ${space(6)};
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
    background-color: ${color("gray", 700)};
    z-index: 2;

    opacity: ${({ $isMobileMenuOpen }) => ($isMobileMenuOpen ? "60%" : "0%")};
    transform: translateX(
            ${({ $isMobileMenuOpen }) => ($isMobileMenuOpen ? "0" : "100%")}
    );
    transition: opacity 300ms,
    transform 0s ${({ $isMobileMenuOpen }) => ($isMobileMenuOpen ? "0s" : "300ms")};

    @media (min-width: ${breakpoint("desktop")}) {
        display: none;
    }
`;

const Nav = styled.nav<IsMobileMenuOpenProps>`
    position: fixed;
    top: ${space(16)};
    bottom: 0;
    width: 19.5rem;
    padding: ${space(1)} ${space(2)} ${space(6)};
    flex: 1;
    display: flex;
    flex-direction: column;
    background: ${color("gray", 900)};
    z-index: 33;
    transform: ${({ $isMobileMenuOpen }) => $isMobileMenuOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform .3s;

    @media (min-width: ${breakpoint("desktop")}) {
        position: relative;
        top: 0;
        width: calc(100% - 2rem);
        padding: ${space(0)} ${space(4)} ${space(8)};
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
    //outline: none;
    @media (min-width: ${breakpoint("desktop")}) {
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
      <SidebarContainer $isSidebarCollapsed={isSidebarCollapsed} data-testid={"SidebarContainer"}>
        <FixedContainer>
          <HeaderContainer>
            <Logo isSidebarCollapsed={isSidebarCollapsed}/>
            <MobileMenuButton
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              data-testid={"MobileMenuButton"}
            >
              <Image
                src={isMobileMenuOpen ? Close : Menu}
                alt={isMobileMenuOpen ? "close menu" : "open menu"}
                data-testid={"MobileMenuButtonIcon"}
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

