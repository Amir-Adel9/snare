import { Stack } from 'expo-router';
import '@/global.css';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        statusBarBackgroundColor: '#6366f1',
        headerStyle: {
          backgroundColor: '#6366f1',
          borderBottomWidth: 0,
        },
        headerTintColor: '#ffffff',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name='(tabs)'
        options={{
          title: 'Snare',
        }}
      />
    </Stack>
  );
}
