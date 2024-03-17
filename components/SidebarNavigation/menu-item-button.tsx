import React, { ReactNode } from "react";
import { BaseListItem, Icon } from "./menu-item-link";
import styled from "styled-components";

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

const MenuItem = styled(BaseListItem)<MenuItemProps>`
    &:hover {
        background: ${({ theme }) => theme.colors.gray[700]};
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
