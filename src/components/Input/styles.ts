import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled.View `
  width: 100%;
`;

export const Label = styled.Text `
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 4px;
`;

export const Field = styled(TextInput) `
  width: 100%;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    border-color: ${theme.COLORS.GRAY_300};
  `}

  border-radius: 6px;
  border-width: 1px;
  padding: 14px;
`;