import { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Percent } from '@components/Percent';
import { InfoCard } from '@components/InfoCard';
import { Loading } from '@components/Loading';

import { StatisticsStorageDTO } from '@storage/statistics/StatisticsStorageDTO';
import { statisticsGet } from '@storage/statistics/statisticsGet';

import { 
    Container, 
    ContainerStatistics, 
    Content,
    Title,
    CardGroup
 } from './styles';

export function Statistics() {
  const [isLoading, setIsLoading] = useState(true);
  const [statistics, setStatistics] = useState<StatisticsStorageDTO>();

  const navigation = useNavigation();

  async function fetchStatistics() {
    try {
      setIsLoading(true);
      const data = await statisticsGet();
      setStatistics(data);
    } catch (error) {
      Alert.alert('Estatísticas', 'Não foi possível carregar as estatísticas das refeições.');
    } finally {
      setIsLoading(false);
    }
  }
  
  function handleGoBack() {
    navigation.navigate('home');
  }
  
  useFocusEffect(useCallback(() => {
    fetchStatistics();
  }, []));

  return (
    <Container type={statistics && statistics.percentOnTheDiet >= 50 ? 'PRIMARY' : 'SECONDARY'} >
      <ContainerStatistics>
        <Percent 
          percent={statistics ? statistics.percentOnTheDiet : 0}
          subtitle="das refeições dentro da dieta"
          icon='LEFT'
          onPress={handleGoBack}
        />
      </ContainerStatistics>
      <Content
        style={{
          gap: 8
        }}
      >
        <Title>
          Estatísticas gerais
        </Title>
        {
        isLoading ?
          <Loading /> :
          statistics && <>
            <CardGroup>
              <InfoCard 
                title={`${statistics.bestSequence}`}
                subtitle="melhor sequência de pratos dentro da dieta"
                style={{
                  marginRight: 12
                }}
              />
            </CardGroup>
            <CardGroup>
              <InfoCard 
                title={`${statistics.meals}`}
                subtitle="refeições registradas"
              />
            </CardGroup>
            
            <CardGroup
              style={{
                gap: 8
              }}
            >
              <InfoCard 
                title={`${statistics.mealsOnTheDiet}`}
                subtitle="refeições dentro da dieta"
                type="PRIMARY"
                style={{
                  marginRight: 12
                }}
              />

              <InfoCard 
                title={`${statistics.mealsOffTheDiet}`}
                subtitle="refeições fora da dieta"
                type="SECONDARY"
                style={{
                  marginRight: 12
                }}
              />
            </CardGroup>
          </>
        }
      </Content>
    </Container>
  );
}