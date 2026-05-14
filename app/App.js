import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import AppNavigator from "./src/navigation/AppNavigator";

import { runMigrations } from "./src/database/migrations";

export default function App() {
  const [isDatabaseReady, setIsDatabaseReady] = useState(false);

  useEffect(() => {
    async function initializeDatabase() {
      try {
        await runMigrations();
        console.log("Banco inicializado");
        setIsDatabaseReady(true);
      } catch (error) {
        console.error(error);
      }
    }
    initializeDatabase();
  }, []);

  if (!isDatabaseReady) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
