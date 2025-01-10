import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Workouts from './workouts';
import Home from '.';
import BottomTabs from '@/src/core/components/BottomTabs';
import { APP_MODULES } from '@/src/core/app-modules';

export default function TabLayout() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      backBehavior='history'
      tabBarPosition='bottom'
      tabBar={(props) => <BottomTabs {...props} />}
    >
      {Object.values(APP_MODULES).map((module) => (
        <Tab.Screen
          key={module.name}
          name={module.name}
          component={module.component}
        />
      ))}
    </Tab.Navigator>
  );
}
