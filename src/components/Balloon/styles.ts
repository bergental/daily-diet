import styled, { css } from 'styled-components/native';

export type BallonTypeStyleProps =  'PRIMARY' | 'SECONDARY';

type Props = {
  type: BallonTypeStyleProps;
}


export const Container = styled.View `
  flex-direction: row;
  justify-content: flex-start;
`;

export const Item = styled.View `
  flex-direction: row;
  min-height: 34px;
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 8px 16px;
  align-items: center;
`;

export const Status = styled.View<Props> `
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  margin-right: 8px;
`;

export const Title = styled.Text `
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  text-align: center;
`;