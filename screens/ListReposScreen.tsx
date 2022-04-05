import { StyleSheet, Button, Alert } from 'react-native';

import EditListReposInfo from '../components/EditListReposInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function ListReposScreen({ navigation }: RootTabScreenProps<'ListRepos'>) {
  const createButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List Repos</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditListReposInfo path="/screens/ListReposScreen.tsx" />
      <Button title={"Alert"} onPress={createButtonAlert} />
      <Button
        title="Back"
        onPress={() => navigation.navigate('DetailRepos')}
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
