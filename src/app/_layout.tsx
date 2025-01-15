import { Stack } from 'expo-router';
import '@/global.css';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarBackgroundColor: '#6366f1',
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
