import { TouchableOpacityProps } from 'react-native';

import { Container, Title, SubTitle, InfoCardTypeStyleProps, TitleTypeStyleProps } from './styles';


type Props = TouchableOpacityProps & {
  title: string;
  subtitle: string;
  minHeight?: number;
  type?: InfoCardTypeStyleProps;
  titleType?: TitleTypeStyleProps;
  icon?: JSX.Element;
}

export function InfoCard({ 
    title,
    subtitle,
    minHeight = 89,
    type = 'INFO',
    titleType = 'SMALLER',
    icon,
    ...rest
  }: Props) 
{
  return (
    <Container
      type={type}
      minHeight={minHeight}
    >
      {
        icon != undefined && icon
      }

      <Title titleType={titleType}>
        { title }
      </Title>

      <SubTitle>
        { subtitle }
      </SubTitle>
    </Container>
  )
}