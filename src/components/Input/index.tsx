import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';


import { Container, Label, Field } from './styles';

type Props = TextInputProps & {
  label: string;
}

export function Input({ label, ...rest }: Props) {
  const theme = useTheme();
  return (
    <Container>
      <Label>
        { label }
      </Label>
      <Field 
        {...rest} 
        selectionColor={theme.COLORS.GRAY_700}
      />
    </Container>
  );
}