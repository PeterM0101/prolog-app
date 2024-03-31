import React, { ReactNode } from "react";
import { Icon, itemStyles } from "./menu-item-link";
import styled from "styled-components";
import { Button } from "../../UI/Button";

type MenuItemButtonProps = {
  className?: string;
  text: string;
  icon: ReactNode;
  onClick: () => void;
  isCollapsed: boolean;
};

interface MenuItemProps {
  $text: string;
}

const MenuItem = styled(Button)<MenuItemProps>`
    width: 100%;
    ${itemStyles};

    &:hover {
        background: ${({ theme }) => theme.color.gray[700]};
    }

    ${({ $text }) => $text === "Collapse" &&
            `display: none;

    @media (min-width: 64rem) {
        display: flex;
    }`
    }
`;

export function MenuItemButton ({
  text,
  onClick,
  icon,
  isCollapsed,
}: MenuItemButtonProps) {
  return (
    <MenuItem $text={text} onClick={onClick}>
      <Icon>
        {icon}
      </Icon>
      {!isCollapsed && text}
    </MenuItem>
  );
}
