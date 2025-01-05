import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import {
  Dumbbell,
  Receipt,
  Notebook,
  Apple,
  ChevronRight,
} from 'lucide-react-native';
import { router } from 'expo-router';

interface ModuleCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onPress: () => void;
}

const ModuleCard = ({ icon, title, subtitle, onPress }: ModuleCardProps) => (
  <Pressable
    className='mb-4 bg-white rounded-2xl p-4 flex-row items-center shadow-sm'
    onPress={onPress}
  >
    <View className='w-10 h-10 bg-gray-50 rounded-full items-center justify-center'>
      {icon}
    </View>
    <View className='flex-1 ml-4'>
      <Text className='text-lg font-semibold text-gray-800'>{title}</Text>
      <Text className='text-sm text-gray-500'>{subtitle}</Text>
    </View>
    <ChevronRight size={20} color='#9CA3AF' />
  </Pressable>
);

export default function Cards() {
  const modules = [
    {
      icon: <Dumbbell size={24} color='#4F46E5' />,
      title: 'Gym Tracker',
      subtitle: 'Track your workouts and progress',
      onPress: () => router.navigate('/details'),
    },
    {
      icon: <Receipt size={24} color='#10B981' />,
      title: 'Expenses',
      subtitle: 'Manage your daily expenses',
      onPress: () => console.log('Expenses pressed'),
    },
    {
      icon: <Notebook size={24} color='#F59E0B' />,
      title: 'Notepad',
      subtitle: 'Keep your thoughts organized',
      onPress: () => console.log('Notepad pressed'),
    },
    {
      icon: <Apple size={24} color='#EF4444' />,
      title: 'Calories',
      subtitle: 'Monitor your daily intake',
      onPress: () => console.log('Calories pressed'),
    },
  ];

  return (
    <ScrollView
      className='flex-1 px-4 pt-4 w-full'
      showsVerticalScrollIndicator={true}
    >
      {modules.map((module, index) => (
        <ModuleCard
          key={index}
          icon={module.icon}
          title={module.title}
          subtitle={module.subtitle}
          onPress={module.onPress}
        />
      ))}
    </ScrollView>
  );
}
