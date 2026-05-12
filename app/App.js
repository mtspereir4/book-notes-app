import { useEffect } from "react";

import AppNavigator from "./src/navigation/AppNavigator";

import { runMigrations } from "./src/database/migrations";

export default function App() {
  useEffect(() => {
    async function initializeDatabase() {
      try {
        await runMigrations();
        console.log("Banco inicializado");
      } catch (error) {
        console.error(error);
      }
    }
    initializeDatabase();
  }, []);

  return <AppNavigator />;
}
