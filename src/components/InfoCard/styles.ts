import styled, { css } from 'styled-components/native';

export type InfoCardTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'INFO';
export type TitleTypeStyleProps = 'SMALLER' | 'BIGGER';

type Props = {
  type: InfoCardTypeStyleProps;
  minHeight: number;
}

type TitleProps = {
  titleType: TitleTypeStyleProps;
}

export const Container = styled.View <Props>`
  flex: 1;
  width: 100%;

  ${({ theme, type, minHeight }) => css`
    min-height: ${minHeight}px;
    background-color: ${type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : (type === 'SECONDARY' ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_200 )};
  `}

  border-radius: 8px;

  justify-content: center;
  align-items: center;
`;


export const Title = styled.Text <TitleProps>`
  ${({ theme, titleType }) => css`
    font-size: ${titleType === 'BIGGER' ? theme.FONT_SIZE.XXL : theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    text-align: center;
    color: ${theme.COLORS.GRAY_700};
  `}  
  margin: 16px;
  margin-bottom: 0px;
`

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    text-align: center;
    color: ${theme.COLORS.GRAY_600};
  `}
  margin: 16px;
  margin-top: 8px;
`;