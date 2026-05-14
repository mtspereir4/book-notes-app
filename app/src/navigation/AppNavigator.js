import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import BookDetailScreen from "../screens/BookDetailScreen";
import CreateBooksScreen from "../screens/BookFormScreen";
import BookFormScreen from "../screens/BookFormScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BookDetails" component={BookDetailScreen} />
        <Stack.Screen name="CreateBook" component={BookFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
