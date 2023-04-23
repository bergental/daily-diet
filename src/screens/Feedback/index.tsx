import { useRoute, useNavigation } from '@react-navigation/native';

import { 
    Container, 
    Title,
    SubtitleContainer,
    Subtitle,
    Icon,
    ButtonContainer
 } from './styles';
import { Button } from '@components/Button';

 type RouteParams = {
  mealId: string;
  onTheDiet: boolean;
  backTo?: 'mealDetail' | 'home';
 }

export function Feedback() {
  const route = useRoute();
  const navigation = useNavigation();
  const { mealId, onTheDiet, backTo } = route.params as RouteParams;

  const type = onTheDiet ? 'PRIMARY' : 'SECONDARY';
 
  function handleGoBack() {
    if (backTo === 'mealDetail')
      navigation.navigate('mealDetail', { mealId });
    else
      navigation.navigate('home');
  }

  return (
    <Container>
      <Title type={type}>
        { onTheDiet ? "Continue assim!" : "Que pena!" }
      </Title>
      {
        onTheDiet ?
        (
          <SubtitleContainer>
            <Subtitle>
              { "Você continua " }
            </Subtitle>
            <Subtitle
              bold
            >
            { "dentro da dieta." }
            </Subtitle>
            <Subtitle>
            { " Muito bem!" }
            </Subtitle>
          </SubtitleContainer>
        ) :
        (
          <SubtitleContainer>
            <Subtitle>
              { "Você " }
            </Subtitle>
            <Subtitle
              bold
            >
            { "saiu da dieta" }
            </Subtitle>
            <Subtitle>
            { "  dessa vez, mas continue se esforçando e não desista!" }
            </Subtitle>
          </SubtitleContainer>
        )
      }
      <Icon 
        source={onTheDiet ? require('@assets/feedback-positive.png') : require('@assets/feedback-negative.png')}
      />
      <ButtonContainer>
        <Button
          title="Ir para a página inicial"
          onPress={handleGoBack}
        />
      </ButtonContainer>
    </Container>
  );
}