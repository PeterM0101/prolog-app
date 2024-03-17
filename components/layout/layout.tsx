import { ReactNode } from "react";
import { SidebarNavigation } from "../SidebarNavigation";
import styled from "styled-components";

interface LayoutProps {
  children: ReactNode;
}

const Container = styled.div`
    display: flex;
    width: 100%;
    background: ${({ theme }) => theme.colors.gray[400]};
    height: 100vh;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <SidebarNavigation/>
      {children}
    </Container>

  );
};

export default Layout;
