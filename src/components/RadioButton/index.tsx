import { useState } from 'react';
import { ViewProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container, Label, Group, Item, Status, Title } from './styles';

type Props = ViewProps & {
  label: string;
  initialValue?: string;
  onSelectedItem: (item: string) => void;
}


export function RadioButton({ label, initialValue, onSelectedItem, ...rest }: Props) {

  const theme = useTheme()
  const [currentValue, setCurrentValue] = useState<String | undefined>(initialValue);

  function handleChangeValue(value: string) {
    setCurrentValue(value);
    onSelectedItem(value);
  }

  return (
    <Container
      {...rest}
    >
      <Label>
        { label }
      </Label>

      <Group
        style={{
          gap: 8
        }}
      >
        <Item 
          type="PRIMARY" 
          selected={currentValue === 'Y'}
          onPress={() => handleChangeValue('Y')}
        >
          <Status type="PRIMARY"/>
          <Title>
            Sim
          </Title>
        </Item>
        
        <Item 
          type="SECONDARY" 
          selected={currentValue === 'N'}
          onPress={() => handleChangeValue('N')}
        >
          <Status type="SECONDARY"/>
          <Title>
            Não
          </Title>
        </Item>
      </Group>
    </Container>
  )
}