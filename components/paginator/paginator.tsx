import React, {FC} from 'react';
import styled from "styled-components";
import {color, space} from "@/styles/theme";

const PaginatorContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${space(4, 6)};
    border-top: 1px solid ${color("gray", 200)};
`

const ButtonContainer = styled.div`
    display: flex;
    gap: ${space(2)};
`

const Button = styled.button`
    cursor: pointer;

    /* remove default button styles */
    border: 1px solid ${color('gray', 300)};
    border-radius: ${space(2)};
    margin: 0;
    padding: ${space(4, 3)};
    background: transparent;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    appearance: none;
    box-shadow: 0 1px 2px rgb(16 24 40 / 15%);

    &::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
`

interface PaginatorProps {
    page?: number,
    totalPages: number,
    navigateToPage: (page: number) => void
}

const Paginator: FC<PaginatorProps> = ({page = 1, navigateToPage, totalPages}) => {
    return (
        <PaginatorContainer>
            <ButtonContainer>
                <Button
                    disabled={page === 1}
                    onClick={() => {
                        navigateToPage(page - 1)
                    }}>Previous
                </Button>
                <Button disabled={page === totalPages} onClick={() => {
                    navigateToPage(page + 1)
                }}>Next
                </Button>
            </ButtonContainer>

            <div>{`Page ${page} of ${totalPages}`}</div>
        </PaginatorContainer>
    );
};

export default Paginator;