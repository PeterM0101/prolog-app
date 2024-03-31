import React, { FC } from "react";
import Image from "next/image";
import LogoLarge from "../../public/icons/logo-large.svg";
import LogoSmall from "../../public/icons/logo-small.svg";
import styled from "styled-components";

interface LogoProps {
  isSidebarCollapsed: boolean;
}

const LogoContainer = styled.div`
    width: 1.4375rem;
    margin-left: .75rem;
`;

const Logo: FC<LogoProps> = ({ isSidebarCollapsed }) => {
  return <LogoContainer>
    <Image src={isSidebarCollapsed ? LogoSmall : LogoLarge} alt={"logo"}/>
  </LogoContainer>;
};

export default Logo;