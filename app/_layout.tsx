import { TransitionPresets } from '@react-navigation/bottom-tabs';
import '../global.css';
import '../global.css';
import '../global.css';

import { Stack } from 'expo-router';

import { GluestackUIProvider } from '~/components/ui/gluestack-ui-provider';

export default function RootLayout() {
  return (
    <GluestackUIProvider mode='dark'>
      <Stack
        screenOptions={{
          statusBarBackgroundColor: '#111111',
          headerStyle: {
            backgroundColor: '#111111',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          animation: 'fade_from_bottom',
          animationDuration: 300,
        }}
      >
        <Stack.Screen
          name='index'
          options={{
            title: 'Snare ',
            headerTitleAlign: 'center',
            headerLargeTitle: true,
          }}
        />
        <Stack.Screen
          name='details'
          options={{
            ...TransitionPresets.FadeTransition,

            title: 'Details',
          }}
        />
      </Stack>
    </GluestackUIProvider>
  );
}
