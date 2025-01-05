import '../global.css';
import '../global.css';
import '../global.css';

import { Stack } from 'expo-router';

import { PortalHost } from '@rn-primitives/portal';
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
        }}
      >
        <Stack.Screen
          name='index'
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen
          name='details'
          options={{
            title: 'Details',
          }}
        />
        <PortalHost />
      </Stack>
    </GluestackUIProvider>
  );
}
