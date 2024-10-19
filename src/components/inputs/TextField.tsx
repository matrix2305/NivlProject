import { Text, TextInput, TextInputProps, View } from 'react-native';

type Props = {
  label?: string;
} & TextInputProps;

export const TextField = ({ label, placeholder, ...other }: Props) => {
  return (
    <View>
      {label && (
        <Text style={{ position: 'absolute', top: 2, left: 10, fontSize: 13 }}>{label}</Text>
      )}
      <TextInput
        {...other}
        style={{
          paddingHorizontal: 10,
          paddingTop: 15,
          paddingBottom: 4,
          borderRadius: 4,
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: '#d5d5d5',
        }}
      />
    </View>
  );
};
