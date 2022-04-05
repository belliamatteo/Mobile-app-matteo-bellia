import { StyleSheet, Button } from 'react-native';

import EditDetailReposInfo from '../components/EditDetailReposInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function DetailReposScreen({ navigation }: RootTabScreenProps<'DetailRepos'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Repos</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditDetailReposInfo path="/screens/DetailReposScreen.tsx" />
      <Button
        title="Back"
        onPress={() => navigation.navigate('ListRepos')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});