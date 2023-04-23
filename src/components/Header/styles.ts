import styled, { css } from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';

export const Container = styled.View`
  width: 100%;
  padding: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity ``;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_600
})) ``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  flex: 1;
  align-self: center;
  text-align: center;
`;