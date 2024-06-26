import React from "react";
import styled, {css} from "styled-components";
import {color, space, textFont} from "@/styles/theme";

export enum BadgeSize {
    sm = "sm",
    md = "md",
    lg = "lg",
}

export enum BadgeColor {
    primary = "primary",
    gray = "gray",
    error = "error",
    warning = "warning",
    success = "success",
}

type BadgeProps = {
    children?: React.ReactNode;
    size?: BadgeSize;
    color?: BadgeColor;
};

interface ContainerProps extends Omit<BadgeProps, "children"> {
}

const Container = styled.div<ContainerProps>`
    width: fit-content;
    display: flex;
    align-items: center;
    border-radius: ${space(4)};
    ${({size}) => {
        switch (size) {
            case BadgeSize.sm:
                return css`
                    padding: ${space(0, 2)};
                    height: 1.375rem;
                    ${textFont("xs", "medium")}
                `;
            case BadgeSize.md:
                return css`
                    padding: 0 0.625rem;
                    height: 1.5rem;
                    ${textFont("sm", "medium")}
                `;
            case BadgeSize.lg:
                return css`
                    padding: ${space(0, 3)};
                    height: 1.75rem;
                    ${textFont("sm", "medium")}
                `;
        }
    }}

    ${(props) => {
        switch (props.color) {
            case BadgeColor.gray:
                return css`
                    background: ${color("gray", 100)};
                    color: ${color("gray", 700)};
                `;
            default:
                return css`
                    background: ${color("gray", 50)};
                    color: ${color("gray", 700)};
                `;
        }
    }}
`;

export function Badge({children, size = BadgeSize.sm, color = BadgeColor.primary}: BadgeProps) {
    return <Container color={color} size={size}>{children}</Container>;
};
