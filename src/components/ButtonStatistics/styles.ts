import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type ButtonStatisticsTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ButtonStatisticsTypeStyleProps
}

export const Container = styled(TouchableOpacity) <Props>`
  flex: 1;
  width: 100%;

  min-height: 102px;
  max-height: 102px;

  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

  border-radius: 8px;

  justify-content: center;
  align-items: center;
`;