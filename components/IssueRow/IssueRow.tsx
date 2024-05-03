import React, {FC} from 'react';
import {capitalize} from "lodash";
import {Badge, BadgeColor, BadgeSize} from "../../UI/Badge/badge";
import styled from "styled-components";
import {color, space, textFont} from "@/styles/theme";
import Image from "next/image";
import {ProjectLanguage} from "../../pages/api/projects";
import {Issue, IssueLevel} from "@/components/IssueRow/issue.types";

const levelColors = {
    [IssueLevel.info]: BadgeColor.success,
    [IssueLevel.warning]: BadgeColor.warning,
    [IssueLevel.error]: BadgeColor.error,
};

const Row = styled.tr`
    &:nth-child(odd) {
        background: ${color('gray', 50)};
    }
;
`

const Cell = styled.td`
    padding: ${space(4, 6)};
    color: ${color('gray', 500)};
    vertical-align: middle;
`

const IssueCellContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: ${space(2)};
`

const IssueInfo = styled.div`
    ${textFont('sm', 'regular')}
`

const ErrorType = styled.span`
    ${textFont('sm', 'medium')};
    font-weight: bold;
`

const IssueMessage = styled.div`
    color: ${color('gray', 900)};
    width: 500px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const LanguageIcon = styled(Image)``

interface IssueRowProps {
    issue: Issue,
    projectLanguage: ProjectLanguage
}

export const IssueRow: FC<IssueRowProps> = ({issue, projectLanguage}) => {
    const {name, message, stack, level, numEvents, numUsers} = issue;
    const firstLineOfStackTrace = stack.split("\n")[1];

    return (
        <Row>
            <Cell>
                <IssueCellContainer>
                    <LanguageIcon src={`/icons/${projectLanguage}.svg`} alt={'ggg'} width={40}
                                  height={40}/>
                    <IssueInfo>
                        <IssueMessage>
                            <ErrorType>{name}:&nbsp;</ErrorType>
                            {message}
                        </IssueMessage>
                        <div>{firstLineOfStackTrace}</div>
                    </IssueInfo>
                </IssueCellContainer>
            </Cell>
            <Cell>
                <Badge color={levelColors[level]} size={BadgeSize.sm}>
                    {capitalize(level)}
                </Badge>
            </Cell>
            <Cell>{numEvents}</Cell>
            <Cell>{numUsers}</Cell>
        </Row>
    );
};