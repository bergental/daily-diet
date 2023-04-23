import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

type Props = {
  type: 'PRIMARY' | 'SECONDARY';
  selected?: boolean;
}

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

export const Group = styled.View `
  width: 100%;
  flex-direction: row;
`;

export const Item = styled(TouchableOpacity) <Props>`
  flex: 1;
  flex-direction: row;
  min-height: 50px;
  max-height: 50px;

  ${({ theme, selected, type }) => css`
    background-color:  ${selected ? (type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT) : theme.COLORS.GRAY_200};
    border-color: ${selected ? (type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK) : theme.COLORS.GRAY_200};
  `}
  border-radius: 6px;
  border-width: 2px;

  justify-content: center;
  align-items: center;
`;

export const Status = styled.View<Props> `
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  margin-right: 8px;
`;

export const Title = styled.Text `
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;