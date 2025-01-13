import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { APP_MODULES } from '../app-modules';
import { router } from 'expo-router';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';

const BottomTabs = ({ state }: MaterialTopTabBarProps) => {
  const [activeTabIndex, setActiveTab] = useState<number>(
    APP_MODULES.home.index
  );

  useEffect(() => {
    setActiveTab(state.index);
  }, [state.index]);

  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.tabBar}>
        {Object.values(APP_MODULES).map((module) => (
          <TouchableOpacity
            key={module.name}
            style={[styles.tabBarItem]}
            onPress={() => router.navigate(module.path)}
          >
            {module.icon({
              props: {
                color: activeTabIndex === module.index ? '#6366f1' : '#6e6e6f',
              },
            })}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#101010',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
  },
  tabBarItem: {
    borderRadius: 20,
    padding: 5,
  },
});

export default BottomTabs;
