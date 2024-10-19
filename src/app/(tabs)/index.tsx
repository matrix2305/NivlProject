import { HelloWave } from '@/components/HelloWave';
import { TextField } from '@/components/inputs/TextField';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { selectGlobalValue, setGlobalValue } from '@/stores';
import { Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function HomeScreen() {
  const globalValue = useSelector(selectGlobalValue);
  const dispatch = useDispatch();

  const handleChangeGlobalValue = (value: string) => {
    dispatch(setGlobalValue(value));
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ededed', dark: '#1D3D47' }}
      headerImage={<Image source={require('@/assets/images/nivl.png')} style={styles.nivlLogo} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <TextField
          label="Global field"
          value={globalValue}
          onChangeText={handleChangeGlobalValue}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  nivlLogo: {
    height: 200,
    width: 160,
  },
});
