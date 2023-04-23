import { ViewProps } from 'react-native';

import { Container, Item, Status, Title, BallonTypeStyleProps } from './styles';

type Props = ViewProps & {
  type: BallonTypeStyleProps
  text: string;
}


export function Balloon({ text, type, ...rest }: Props) {
  return (
    <Container
      {...rest}
    >
        <Item>
          <Status type={type}/>
          <Title>
            { text }
          </Title>
        </Item>
    </Container>
  )
}