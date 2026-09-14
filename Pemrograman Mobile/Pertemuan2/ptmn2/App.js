import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Nama: Dimas Faturohman</Text>
      <Text>NIM: 2488010003</Text>
      <Text>Asal Sekolah: MAS NU PUTRA BUNTET PESANTREN</Text>
      <Text>Cita-Cita: Peternak Lele</Text>
      <Text>Rencana: Belajar membuat sistem otomasi peternakan lele</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
