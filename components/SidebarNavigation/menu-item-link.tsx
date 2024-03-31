import Link from "next/link";
import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { color } from "../../styles/theme";

type MenuItemProps = {
  text: string;
  icon: ReactNode;
  href: string;
  isActive: boolean;
  isCollapsed: boolean;
};

interface ListItemProps {
  $isActive: boolean;
}

export const itemStyles = css`
    height: ${({ theme }) => theme.space[12]};
    display: flex;
    cursor: pointer;
    align-items: center;
    border-radius: 6px;
    margin-top: ${({ theme }) => theme.space[1]};
    padding: 0 ${({ theme }) => theme.space[3]};
    background: transparent;
    outline: none;
    color: ${color("gray", 100)};

    &:first-child {
        margin-top: 0;
    }
`;
// export const BaseListItem = styled.li`
//     height: ${({ theme }) => theme.space[12]};
//     display: flex;
//     cursor: pointer;
//     align-items: center;
//     border-radius: 6px;
//     margin-top: ${({ theme }) => theme.space[1]};
//     padding: 0 ${({ theme }) => theme.space[3]};
//     background: transparent;
//     outline: none;
//     color: ${color("gray", 100)};
//
//     &:first-child {
//         margin-top: 0;
//     }
// `;

const ListItem = styled.li<ListItemProps>`
    ${itemStyles};
    background: ${({ $isActive, theme }) => $isActive ? theme.color.gray[700] : "transparent"}
`;

export const LinkItem = styled(Link)`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.gray[100]};
    text-decoration: none;
`;

export const Icon = styled.div`
    position: relative;
    width: ${({ theme }) => theme.space[6]};
    height: ${({ theme }) => theme.space[6]};
    margin-right: ${({ theme }) => theme.space[3]}
`;

export function MenuItemLink ({
  text,
  href,
  icon,
  isActive,
  isCollapsed,
}: MenuItemProps) {

  return (
    <ListItem $isActive={isActive}>
      <LinkItem href={href}>
        <Icon>
          {icon}
        </Icon>
        {!isCollapsed && text}
      </LinkItem>
    </ListItem>
  );
}
