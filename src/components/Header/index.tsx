import { useNavigation } from '@react-navigation/native';

import { Container, Title, BackButton, BackIcon } from './styles';

type Props = {
  title: string;
  backTo?: 'mealDetail' | 'home';
}

export function Header({ title, backTo = 'home' }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    if (backTo === 'mealDetail')
      navigation.goBack();
    else
      navigation.navigate('home');
  }
  
  return (
    <Container>
      <BackButton
        onPress={handleGoBack}
      >
        <BackIcon />
      </BackButton>
      <Title>
        { title }
      </Title>
    </Container>
  )
}