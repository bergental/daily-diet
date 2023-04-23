import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  type: 'PRIMARY' | 'SECONDARY';
}

export const Container = styled(SafeAreaView) <Props>`
  flex: 1;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Content = styled.View`
  position: absolute;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  top: 104px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 24px;
`;

export const FieldGroup = styled.View`
flex: 1;
`;

export const Name = styled.Text `
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 8px;
`;

export const Description = styled.Text `
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-bottom: 24px;
`;

export const LabelDate = styled.Text `
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 8px;
`;

export const DateTime = styled.Text `
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-bottom: 24px;
`;