import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { ArrowLeft, ArrowUpRight } from 'phosphor-react-native';

export type PercentTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: PercentTypeStyleProps
}

export const ContainerIconLeft = styled(TouchableOpacity)`
  position: absolute;
  top: -8px;
  left: -8px;
  padding: 8px;
  align-items: center;
  justify-content: center;
`;

export const IconRight = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
})) <Props>`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const IconLeft = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
})) <Props>``;