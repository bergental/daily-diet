import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity) <Props>`
  flex: 1;
  flex-direction: row;

  min-height: 50px;
  max-height: 50px;

  padding: 16px 24px;

  ${({ theme, type }) => css`
    background-color: ${type === 'PRIMARY' ? theme.COLORS.GRAY_600 : 'transparent'};
    border-color: ${theme.COLORS.GRAY_700};
  `}
  border-radius: 6px;
  border-width: 1px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text <Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  text-align: center;
`;