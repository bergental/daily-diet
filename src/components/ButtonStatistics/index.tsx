import { TouchableOpacityProps } from 'react-native';

import { Percent } from '@components/Percent';

import { Container } from './styles';

type Props = TouchableOpacityProps & {
  percent: number;
  subtitle: string;
}

export function ButtonStatistics({ percent, subtitle, ...rest }: Props) {

  return (
    <Container
      {...rest}
      type={percent < 50 ? 'SECONDARY' : 'PRIMARY'}
    >
      <Percent
        percent={percent}
        subtitle={subtitle}
      />
    </Container>
  )
}