import { APP_MODULES } from '@/src/core/app-modules';
import { router, Tabs } from 'expo-router';
import {
  Apple,
  ArrowLeft,
  DollarSign,
  Dumbbell,
  Home,
  Notebook,
} from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        title: 'Snare',
        headerTitleAlign: 'center',
      }}
    >
      <Tabs.Screen
        name={APP_MODULES.notepad.name}
        options={{
          tabBarIcon: ({ color }) =>
            APP_MODULES.notepad.icon({ props: { color } }),
        }}
      />
      <Tabs.Screen
        name={APP_MODULES.expenses.name}
        options={{
          tabBarIcon: ({ color }) =>
            APP_MODULES.expenses.icon({ props: { color } }),
        }}
      />
      <Tabs.Screen
        name={APP_MODULES.home.name}
        options={{
          tabBarIcon: ({ color }) =>
            APP_MODULES.home.icon({ props: { color } }),
        }}
      />
      <Tabs.Screen
        name={APP_MODULES.workouts.name}
        options={{
          tabBarIcon: ({ color }) =>
            APP_MODULES.workouts.icon({ props: { color } }),
        }}
      />
      <Tabs.Screen
        name={APP_MODULES.calories.name}
        options={{
          tabBarIcon: ({ color }) =>
            APP_MODULES.calories.icon({ props: { color } }),
        }}
      />
    </Tabs>
  );
}
