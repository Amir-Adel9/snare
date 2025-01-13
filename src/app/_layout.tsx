import { Stack } from 'expo-router';
import '@/global.css';
import { View, Text } from 'react-native';
import { Image } from 'expo-image';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarBackgroundColor: '#000000',
        headerStyle: {
          backgroundColor: '#000000',
          borderBottomWidth: 0,
        },
        headerTintColor: '#ffffff',
        headerTitleAlign: 'center',
        headerLeft: (props) => {
          return (
            <View {...props}>
              <Image
                source={'@/assets/images/icon.png'}
                style={{ width: 40, height: 40 }}
                contentFit='cover'
                transition={1000}
              />
            </View>
          );
        },
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
