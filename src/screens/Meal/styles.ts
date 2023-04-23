import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type MealTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'INFO';

type Props = {
  type: MealTypeStyleProps;
}

export const Container = styled(SafeAreaView) <Props>`
  flex: 1;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : (type === 'SECONDARY' ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_300 )};
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

export const FieldRow = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const FieldItem = styled.View`
  flex: 1;
`;