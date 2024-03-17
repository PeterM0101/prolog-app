import Link from "next/link";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

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

export const BaseListItem = styled.li`
    height: ${({ theme }) => theme.spacing[12]};
    display: flex;
    cursor: pointer;
    align-items: center;
    border-radius: ${({ theme }) => theme.spacing[1.5]};
    margin-top: ${({ theme }) => theme.spacing[1]};
    padding: 0 ${({ theme }) => theme.spacing[3]};
    background: transparent;
    color: ${({ theme }) => theme.colors.gray[100]};

    &:first-child {
        margin-top: 0;
    }
`;

const ListItem = styled(BaseListItem)<ListItemProps>`
    background: ${({ $isActive, theme }) => $isActive ? theme.colors.gray[700] : "transparent"}
`;

export const LinkItem = styled(Link)`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.gray[100]};
    text-decoration: none;
`;

export const Icon = styled.div`
    position: relative;
    width: ${({ theme }) => theme.spacing[6]};
    height: ${({ theme }) => theme.spacing[6]};
    margin-right: ${({ theme }) => theme.spacing[3]}
`;

export function MenuItemLink ({
  text,
  href,
  icon,
  isActive,
  isCollapsed,
}: MenuItemProps) {
  const router = useRouter();
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
