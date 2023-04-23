import { TouchableOpacityProps } from 'react-native';
import { Container, Time, Divider, Title, Status } from './styles'

type Props = TouchableOpacityProps & {
  time: string;
  title: string;
  status: string;
  // status: 'Y' | 'N'; 
}

export function MealCard({ time, title, status, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Time>
      { time }
      </Time>
      <Divider />
      <Title>
        { title }
      </Title>
      <Status type={status === 'Y' ? 'PRIMARY' : 'SECONDARY'}/>
    </Container>
  )
}