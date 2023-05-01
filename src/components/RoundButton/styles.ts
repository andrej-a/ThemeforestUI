import styled from 'styled-components';

import { size } from '@/types/constants';

const { tablet } = size;
export const RoundButtonContainer = styled.div`
    width: auto;
    max-width: ${({ theme: { width } }) => width.xx4l}px;
    height: auto;
    padding: ${({ theme: { padding } }) => padding.l}px;
    background: ${({ theme: { colors } }) => colors.primary};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.full}%;

    :hover {
        background: ${({ theme: { colors } }) => colors.primaryLight};
    }

    :has(button[disabled]) {
        background: ${({ theme: { colors } }) => colors.grey};
        cursor: not-allowed;
        :hover {
            background: ${({ theme: { colors } }) => colors.grey};
        }
    }
`;

export const RoundButtonElement = styled.button`
    padding: ${({ theme: { padding } }) => padding.xxl};
    border: ${({ theme: { border } }) => border.l};
    background: ${({ theme: { colors } }) => colors.primary};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.full}%;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xl};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.s}em;
    color: ${({ theme: { colors } }) => colors.white};
    cursor: pointer;

    &:not(:disabled):hover {
        background: ${({ theme: { colors } }) => colors.primaryLight};
    }

    &:disabled {
        background: ${({ theme: { colors } }) => colors.grey};
        cursor: not-allowed;
    }

    @media (max-width: ${tablet}px) {
        padding: ${({ theme: { padding } }) => padding.mml};
        font-size: ${({ theme: { fontSize } }) => fontSize.x}px;
    }
`;
