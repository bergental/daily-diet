import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type StatisticsTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: StatisticsTypeStyleProps
}

export const Container = styled(SafeAreaView) <Props>`
  flex: 1;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const ContainerStatistics = styled.View`
  padding: 24px;
`;

export const Content = styled.View`
  position: absolute;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  top: 168px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-top: 9px;
  margin-bottom: 23px;
  text-align: center;
`;

export const CardGroup = styled.View`
  width: 100%;
  flex-direction: row;
`;