import { View, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { IconContext, Plus, PencilSimpleLine, Trash } from 'phosphor-react-native';

import { Container, Title, ButtonTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps
  icon?: 'Add' | 'Edit' | 'Delete';
}

export function Button({ title, icon, type = 'PRIMARY', ...rest }: Props) {

  const theme = useTheme()


  function getIcon() {
    if (icon) {
      switch (icon) {
        case 'Add':
          return <Plus />;
        case 'Edit':
          return <PencilSimpleLine />;
        default:
          return <Trash weight='regular' />;
      }
    }
  }

  return (
    <Container
      {...rest}
      type={type}
    >
      {icon && 
        (
        <IconContext.Provider
         value={{
          size: 18,
          color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700,
          weight: 'fill'
        }}
        >
          <View
            style={{ marginRight: 12 }}
          >
            { getIcon() }
          </View> 
        </IconContext.Provider>
        )
      }
      <Title type={type}>
        { title }
      </Title>
    </Container>
  )
}