
import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type MealTypeStyleProps = 'PRIMARY' | 'SECONDARY';
type Props = {
  type: MealTypeStyleProps
}

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 49px;

  border-color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-width: 1px;
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  padding: 12px 14px;
  margin-bottom: 8px;
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_700}
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  align-self: center;
  text-align: center;
  margin-right: 12px;
`;

export const Title = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Divider = styled.View`
  width: 0;
  min-height: 14px;
  max-height: 14px;
  border-left-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin-right: 12px;
`;

export const Status = styled.View<Props> `
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;