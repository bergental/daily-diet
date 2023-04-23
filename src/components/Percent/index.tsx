import { TouchableOpacityProps } from 'react-native';

import { InfoCard } from '@components/InfoCard';

import { ContainerIconLeft, IconLeft, IconRight, PercentTypeStyleProps } from './styles';


type Props = TouchableOpacityProps & {
  percent: number;
  subtitle: string;
  icon?: 'LEFT' | 'RIGHT';
}

export function Percent({ percent, subtitle, icon = 'RIGHT', ...rest }: Props) {
  const type: PercentTypeStyleProps = percent < 50 ? 'SECONDARY' : 'PRIMARY';
  return (
    <InfoCard
      title={`${percent.toFixed(2).replace('.', ',')}%`}
      subtitle={subtitle}
      type={type}
      minHeight={102}
      titleType='BIGGER'
      icon={icon === 'LEFT' ?
      (
        <ContainerIconLeft
          {...rest}
        >
          <IconLeft type={type} />
        </ContainerIconLeft>
      ) :
      (
        <IconRight type={type} />
      )}
    />
  )
}