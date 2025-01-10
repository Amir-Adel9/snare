import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name='index' />
      <Tabs.Screen name='gym-tracker' />
      <Tabs.Screen name='notepad' />
    </Tabs>
  );
}
