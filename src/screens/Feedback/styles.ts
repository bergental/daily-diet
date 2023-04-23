import { TextProps } from "react-native";
import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export type FeedbackTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: FeedbackTypeStyleProps;
}

type SubtitleProps = {
  bold?: boolean;
}

export const Container = styled(SafeAreaView) `
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text <Props> `
  margin-top: 160px;
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const SubtitleContainer = styled.Text `
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 8px;
`;

export const Subtitle = styled.Text <SubtitleProps>`
  font-weight: ${({ bold }) => bold ? 'bold' : 'normal'};
`;

export const Icon = styled.Image `
  width: 224px;
  height: 281px;
  margin-top: 40px;
`;

export const ButtonContainer = styled.View `
  margin-top: 32px;
`;